import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ArticlePost = () => {
  const { slug } = useParams();
  const article = articles.find((p) => p.slug === slug);

  // If article doesn't exist, redirect to Articles list
  if (!article) return <Navigate to="/articles" replace />;

  // AEO Schema: "TechArticle" tells Google this is technical content
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.seoTitle,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": "Sheridan Jamieson",
      "url": "https://sheridanjamieson.com"
    },
    "datePublished": article.publishDate,
    "proficiencyLevel": "Beginner"
  };

  return (
    <>
      {/* --- DYNAMIC SEO INJECTION --- */}
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://sheridanjamieson.com/articles/${article.slug}`} />
        
        {/* Open Graph (Social Cards) */}
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://sheridanjamieson.com/articles/${article.slug}`} />
        
        {/* JSON-LD Schema for AI Overviews */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* --- VISUAL CONTENT --- */}
      <div className="min-h-screen bg-[#0f172a] text-slate-300 pt-12 pb-20 px-4 md:px-8 selection:bg-rose-500 selection:text-white">
        <div className="max-w-2xl mx-auto">
          
          <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-colors">
            <ArrowLeft size={20} /> Back to Articles
          </Link>

          <header className="mb-10 border-b border-slate-800 pb-10">
            <div className="flex items-center gap-3 text-sm font-mono text-emerald-400 mb-4 uppercase tracking-wider">
               <span>{article.category}</span>
               <span className="text-slate-600">•</span>
               <time className="text-slate-500">{article.publishDate}</time>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
              {article.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {article.description}
            </p>
          </header>

          <article 
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-strong:text-white prose-code:text-rose-300 prose-code:bg-slate-800/50 prose-code:px-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
          
        </div>
      </div>
    </>
  );
};

export default ArticlePost;