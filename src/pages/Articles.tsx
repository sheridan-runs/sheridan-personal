import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "../data/articles";
import { Helmet } from "react-helmet-async";

const Articles = () => {
  return (
    <>
      <Helmet>
        <title>Articles | Sheridan Jamieson</title>
        <meta name="description" content="Thoughts on building software, business, running methodology, and financial strategy." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-slate-300 p-6 md:p-12 selection:bg-rose-500 selection:text-white">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={20} /> Back home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Articles</h1>
            <p className="text-xl text-slate-400">Notes on business, software, strategy, and running.</p>
          </div>

          {/* Article Grid */}
          <div className="space-y-6">
            {articles.map((article) => (
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
