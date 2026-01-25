import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "../data/articles";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ArticlePost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find((p) => p.slug === slug);

  useEffect(() => {
    if (!article) {
      navigate("/articles");
    }
    window.scrollTo(0, 0);
  }, [article, navigate]);

  if (!article) return null;

  return (
    <>
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.description} />
        <link rel="canonical" href={`https://sheridanjamieson.com/articles/${article.slug}`} />
      </Helmet>

      {/* --- MATCHING YOUR EXACT WRAPPER --- */}
      <div className="min-h-screen bg-[#0f172a] text-slate-300 p-6 md:p-12 selection:bg-rose-500 selection:text-white">
        <article className="max-w-3xl mx-auto">
          
          {/* Back Button (Matched) */}
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

          {/* Content (Prose) */}
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-code:text-emerald-300 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
          
        </article>
      </div>
    </>
  );
};

export default ArticlePost;
