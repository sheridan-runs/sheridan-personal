import { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";

const Articles = () => {
  // 1. Add state for the current sort order (defaulting to newest first)
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // 2. Create a sorted copy of the articles array based on the current state
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.publishDate).getTime();
    const dateB = new Date(b.publishDate).getTime();
    
    if (sortOrder === "newest") {
      return dateB - dateA; // Most recent dates first
    } else {
      return dateA - dateB; // Oldest dates first
    }
  });

  return (
    <>
      <Helmet>
        <title>Articles | Sheridan Jamieson</title>
        <meta name="description" content="Thoughts on building software, business, running methodology, and financial strategy." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/articles" />
      </Helmet>

      <Nav />

      <div className="min-h-screen bg-[#0f172a] text-slate-300 pt-14 p-6 md:p-12 selection:bg-rose-500 selection:text-white">
        <div className="max-w-3xl mx-auto mt-8">

          {/* Header & Sort Dropdown */}
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Articles</h1>
              <p className="text-xl text-slate-400">Notes on business, software, strategy, and running.</p>
            </div>

            {/* 3. Add the UI Dropdown */}
            <div className="flex items-center gap-3 shrink-0">
              <label htmlFor="sortOrder" className="text-sm font-mono text-slate-500 uppercase tracking-wider">
                Sort by
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                className="bg-slate-900 border border-slate-700 text-emerald-400 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Article Grid - Now mapping over 'sortedArticles' instead of 'articles' */}
          <div className="space-y-6">
            {sortedArticles.map((article) => (
              <Link key={article.slug} to={`/articles/${article.slug}`} className="block group">
                <article className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <span className="text-emerald-400 font-mono text-sm uppercase tracking-wider">{article.category}</span>
                    <time className="text-slate-500 text-sm font-mono">{article.publishDate}</time>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    {article.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Articles;
