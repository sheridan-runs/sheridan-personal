export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  publishDate: string;
  category: "Engineering" | "Design" | "Strategy";
  content: string; // HTML string
}

export const articles: Article[] = [
  {
    slug: "building-ai-apps-gemini-vercel",
    title: "How I build apps using Gemini, GitHub & Vercel",
    seoTitle: "The AI Stack: Building SaaS with Gemini & Vercel | Sheridan Jamieson",
    description: "Stop coding from scratch. A guide to the 'AI Stack' workflow that helps solopreneurs ship production-ready apps in 24 hours using Gemini 1.5 Pro.",
    publishDate: "2026-01-25",
    category: "Engineering",
    content: `
      <p class="lead text-xl text-slate-300 mb-8">I had ideas—a running calculator, a formula fixer—but I didn't have 6 months to learn React from scratch. I needed a bridge between Logic and Syntax. Here is how I ship production-ready apps in 24 hours using the "AI Stack".</p>

      <div class="flex items-center gap-4 bg-amber-500/10 border border-amber-500/20 p-6 rounded-xl my-12">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <div>
              <h3 class="text-amber-400 font-bold text-lg m-0 leading-none mb-1">Coming Soon</h3>
              <p class="text-amber-200/70 m-0 text-sm">I am currently finalizing the write-up for this workflow. Check back shortly.</p>
          </div>
      </div>
    `
  }
];