import { articles } from "../data/articles";

export interface StaticRouteMeta {
  path: string;
  priority: number;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
}

// Single source of truth for every statically-routed page on the site.
// Keep this in sync with the <Route> declarations in src/App.tsx —
// scripts/check-routes.ts fails the build if they drift.
export const staticRoutes: StaticRouteMeta[] = [
  { path: "/", priority: 1.0, changefreq: "monthly" },
  { path: "/projects", priority: 0.8 },
  { path: "/articles", priority: 0.9, changefreq: "weekly" },
  { path: "/governance", priority: 0.8 },
];

export function getArticlePaths(): string[] {
  return articles.map((article) => `/articles/${article.slug}`);
}

export function getAllPublicPaths(): string[] {
  return [...staticRoutes.map((route) => route.path), ...getArticlePaths()];
}
