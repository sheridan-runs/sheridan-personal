import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { staticRoutes } from "../src/lib/publicPaths";
import { articles } from "../src/data/articles";

const BASE_URL = "https://www.sheridanjamieson.com";
const today = new Date().toISOString().slice(0, 10);

interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq?: string;
  priority: number;
}

const staticEntries: UrlEntry[] = staticRoutes.map((route) => ({
  loc: `${BASE_URL}${route.path}`,
  lastmod: today,
  changefreq: route.changefreq,
  priority: route.priority,
}));

const articleEntries: UrlEntry[] = articles.map((article) => ({
  loc: `${BASE_URL}/articles/${article.slug}`,
  lastmod: article.publishDate,
  priority: 0.8,
}));

const entries = [...staticEntries, ...articleEntries];

const urlBlocks = entries
  .map((entry) => {
    const changefreqLine = entry.changefreq ? `\n    <changefreq>${entry.changefreq}</changefreq>` : "";
    return `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>${changefreqLine}
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks}
</urlset>
`;

const outputPath = resolve(import.meta.dirname, "../public/sitemap.xml");
writeFileSync(outputPath, xml, "utf-8");

console.log(`Generated sitemap.xml with ${entries.length} URLs.`);
