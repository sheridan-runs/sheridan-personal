import { next } from "@vercel/edge";
import { getAllPublicPaths } from "./src/lib/publicPaths";

// Only run on extensionless paths — anything with a file extension (assets,
// sitemap.xml, robots.txt, etc.) is a real static file and never needs a
// soft-404 check.
export const config = {
  matcher: ["/((?!.*\\..*).*)"],
};

const knownPaths = new Set(getAllPublicPaths());

function normalize(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default async function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  if (knownPaths.has(normalize(pathname))) {
    return next();
  }

  // Unknown path: serve the SPA shell (so the client-side router can render
  // the NotFound page) but with a real 404 status, so crawlers stop treating
  // every broken/typo'd URL as valid content.
  const indexResponse = await fetch(new URL("/index.html", request.url));
  const html = await indexResponse.text();

  return new Response(html, {
    status: 404,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
