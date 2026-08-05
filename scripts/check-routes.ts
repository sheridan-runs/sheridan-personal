import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { staticRoutes } from "../src/lib/publicPaths";
import { articles } from "../src/data/articles";

const APP_TSX_PATH = resolve(import.meta.dirname, "../src/App.tsx");
const ARTICLE_ROUTE_PATTERN = "/articles/:slug";

const appSource = readFileSync(APP_TSX_PATH, "utf-8");
const declaredPaths = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1]);

const errors: string[] = [];

// 1. Every declared static path (no ":" param, not the catch-all) must match
// publicPaths.ts exactly — nothing missing, nothing extra.
const declaredStatic = new Set(declaredPaths.filter((path) => path !== "*" && !path.includes(":")));
const expectedStatic = new Set(staticRoutes.map((route) => route.path));

for (const path of expectedStatic) {
  if (!declaredStatic.has(path)) {
    errors.push(`publicPaths.ts declares "${path}" but src/App.tsx has no matching <Route>.`);
  }
}
for (const path of declaredStatic) {
  if (!expectedStatic.has(path)) {
    errors.push(`src/App.tsx declares <Route path="${path}"> but publicPaths.ts doesn't know about it.`);
  }
}

// 2. The dynamic article route must still exist if there are published articles.
if (articles.length > 0 && !declaredPaths.includes(ARTICLE_ROUTE_PATTERN)) {
  errors.push(`articles.ts has ${articles.length} article(s) but src/App.tsx has no "${ARTICLE_ROUTE_PATTERN}" route.`);
}

// 3. The catch-all 404 route must exist — without it, unknown paths silently
// fall through to some other route instead of rendering NotFound.
if (!declaredPaths.includes("*")) {
  errors.push(`src/App.tsx is missing the catch-all <Route path="*"> that renders NotFound.`);
}

// 4. Article slugs must be unique — a duplicate silently breaks routing to
// one of the two articles and would produce a wrong entry in the sitemap.
const slugCounts = new Map<string, number>();
for (const article of articles) {
  slugCounts.set(article.slug, (slugCounts.get(article.slug) ?? 0) + 1);
}
for (const [slug, count] of slugCounts) {
  if (count > 1) {
    errors.push(`Duplicate article slug "${slug}" appears ${count} times in src/data/articles.ts.`);
  }
}

if (errors.length > 0) {
  console.error("Route drift detected:\n");
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  console.error("\nFix src/App.tsx, src/lib/publicPaths.ts, or src/data/articles.ts so they agree, then rebuild.");
  process.exit(1);
}

console.log(`Routes OK: ${expectedStatic.size} static route(s), ${articles.length} article route(s).`);
