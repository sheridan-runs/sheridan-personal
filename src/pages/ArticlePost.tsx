import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "../data/articles";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";

const FALLBACK_OG_IMAGE = "https://www.sheridanjamieson.com/social-preview.jpg";

// Helper for the category pill tag
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

// Helper for prose links and navigation hover states based on category
const getBrandColorStyles = (category: string) => {
  switch (category) {
    case 'Running & Training':
      return { textHover: 'hover:text-[#D4FF00]', borderHover: 'hover:border-[#D4FF00]/50', proseLink: 'prose-a:text-[#D4FF00] hover:prose-a:text-[#D4FF00]/80' };
    case 'Finance':
      return { textHover: 'hover:text-emerald-400', borderHover: 'hover:border-emerald-500/50', proseLink: 'prose-a:text-emerald-400 hover:prose-a:text-emerald-300' };
    case 'Software':
      return { textHover: 'hover:text-sky-400', borderHover: 'hover:border-sky-500/50', proseLink: 'prose-a:text-sky-400 hover:prose-a:text-sky-300' };
    case 'Design':
      return { textHover: 'hover:text-fuchsia-400', borderHover: 'hover:border-fuchsia-500/50', proseLink: 'prose-a:text-fuchsia-400 hover:prose-a:text-fuchsia-300' };
    case 'Strategy':
      return { textHover: 'hover:text-orange-400', borderHover: 'hover:border-orange-500/50', proseLink: 'prose-a:text-orange-400 hover:prose-a:text-orange-300' };
    default:
      return { textHover: 'hover:text-slate-300', borderHover: 'hover:border-slate-500/50', proseLink: 'prose-a:text-slate-300 hover:prose-a:text-white' };
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-NZ', {
    month: 'short',
    year: 'numeric',
  });
};

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
  const brandStyles = getBrandColorStyles(article.category);

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

      <Nav />

      <div className="min-h-screen bg-[#0f172a] text-slate-300 pt-14 p-6 md:p-12 selection:bg-slate-300 selection:text-slate-900">
        <article className="max-w-3xl mx-auto mt-8 animate-enter">

          {/* Back to Articles */}
          <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded">
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">Back to Insights</span>
          </Link>

          {/* Header */}
          <header className="mb-12 border-b border-slate-800/60 pb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${getCategoryStyles(article.category)}`}>
                {article.category}
              </span>
              <span className="text-slate-500 text-sm font-medium">
                {formatDate(article.publishDate)}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              {article.title}
            </h1>
          </header>

          {/* Content */}
          <div
            className={`prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:leading-relaxed prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 ${brandStyles.proseLink}`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Prev / Next Navigation */}
          <nav className="mt-16 pt-8 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              {prevArticle && (
                <Link
                  to={`/articles/${prevArticle.slug}`}
                  className={`group flex flex-col gap-2 p-5 rounded-xl bg-[#1e293b]/40 border border-slate-800 ${brandStyles.borderHover} transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500`}
                >
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                    Previous
                  </span>
                  <span className={`text-base text-slate-300 ${brandStyles.textHover} transition-colors font-semibold leading-snug`}>
                    {prevArticle.title}
                  </span>
                </Link>
              )}
            </div>
            <div>
              {nextArticle && (
                <Link
                  to={`/articles/${nextArticle.slug}`}
                  className={`group flex flex-col gap-2 p-5 rounded-xl bg-[#1e293b]/40 border border-slate-800 ${brandStyles.borderHover} transition-all duration-300 sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500`}
                >
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1.5 sm:justify-end">
                    Next
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className={`text-base text-slate-300 ${brandStyles.textHover} transition-colors font-semibold leading-snug`}>
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
