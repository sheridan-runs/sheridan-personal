import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "../data/articles";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const FALLBACK_OG_IMAGE = "https://www.sheridanjamieson.com/social-preview.jpg";

const ArticlePost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const articleIndex = articles.findIndex((p) => p.slug === slug);
  const article = articles[articleIndex];
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  useEffect(() => {
    if (!article) {
      navigate("/articles");
    }
    window.scrollTo(0, 0);
  }, [article, navigate]);

  if (!article) return null;

  const ogImage = article.ogImage || FALLBACK_OG_IMAGE;

  return (
    <>
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.seoTitle} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={`https://www.sheridanjamieson.com/articles/${article.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-slate-300 p-6 md:p-12 selection:bg-rose-500 selection:text-white">
        <article className="max-w-3xl mx-auto">

          {/* Back Button */}
          <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Articles
          </Link>

          {/* Header */}
          <header className="mb-12 border-b border-slate-800 pb-12">
            <div className="flex items-center gap-3 text-sm text-emerald-500 font-mono mb-6 uppercase tracking-wider">
              <span className="font-bold">{article.category}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-500">{article.publishDate}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {article.description}
            </p>
          </header>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-code:text-emerald-300 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Prev / Next Navigation */}
          <nav className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 gap-4">
            <div>
              {prevArticle && (
                <Link
                  to={`/articles/${prevArticle.slug}`}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <span className="text-xs text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1">
                    <ArrowLeft size={12} /> Previous
                  </span>
                  <span className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors font-medium leading-snug">
                    {prevArticle.title}
                  </span>
                </Link>
              )}
            </div>
            <div>
              {nextArticle && (
                <Link
                  to={`/articles/${nextArticle.slug}`}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 text-right"
                >
                  <span className="text-xs text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1 justify-end">
                    Next <ArrowRight size={12} />
                  </span>
                  <span className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors font-medium leading-snug">
                    {nextArticle.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>

        </article>
      </div>
    </>
  );
};

export default ArticlePost;
