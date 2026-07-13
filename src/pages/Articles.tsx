import { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";

// Expanded category styles with Design and Strategy colors
const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'Running & Training':
      return 'bg-[#D4FF00]/10 text-[#D4FF00] border-[#D4FF00]/20';
    case 'Finance':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'Software':
      return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
    case 'Design':
      return 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20';
    case 'Strategy':
      return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    default:
      return 'bg-slate-700/30 text-slate-400 border-slate-600/50';
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-NZ', {
    month: 'short',
    year: 'numeric',
  });
};

const Articles = () => {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.publishDate).getTime();
    const dateB = new Date(b.publishDate).getTime();
    
    if (sortOrder === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
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

      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center pt-14 p-6 selection:bg-slate-300 selection:text-slate-900">
        
        {/* Background radial glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="max-w-4xl w-full space-y-12 relative z-10 animate-enter mt-12 md:mt-20">

          {/* ── HEADER & FILTERS ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/60 pb-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Insights & Thinking
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                Notes on business, software, strategy, and running.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <label htmlFor="sortOrder" className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Sort by
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                className="bg-[#1e293b]/60 border border-slate-700 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-[#0f172a] transition-all cursor-pointer appearance-none pr-8 relative"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.2em 1.2em'
                }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* ── ARTICLE GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {sortedArticles.map((article) => (
              <Link 
                key={article.slug} 
                to={`/articles/${article.slug}`} 
                className="group flex flex-col gap-3 bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${getCategoryStyles(article.category)}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {formatDate(article.publishDate)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div className="text-center pb-8 pt-8 border-t border-slate-800/60 mt-12">
            <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} Sheridan Jamieson. All Rights Reserved.
            </p>
          </div>

        </main>
      </div>
    </>
  );
};

export default Articles;
