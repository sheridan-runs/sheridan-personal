import { Link, useParams, useNavigate } from "react-router-dom";
import { articles } from "../data/articles";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { articleTheme, themeMark } from "../lib/themes";

const FALLBACK_OG_IMAGE = "https://www.sheridanjamieson.com/social-preview.jpg";

// Accent used for links and highlights inside the article body
const accent: Record<string, string> = {
  money: "#0c5e64",
  run: "#4f6b00",
  biz: "#b8204f",
  impact: "#2d6a3e",
  neutral: "#0c5e64",
};

const formatDate = (dateString: string) =>
  new Date(dateString + "T00:00:00").toLocaleDateString("en-NZ", { day: "numeric", month: "long", year: "numeric" });

const ArticlePost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const articleIndex = articles.findIndex((p) => p.slug === slug);
  const article = articles[articleIndex];
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  useEffect(() => {
    if (!article) navigate("/articles");
    window.scrollTo(0, 0);
  }, [article, navigate]);

  if (!article) return null;

  const ogImage = article.ogImage || FALLBACK_OG_IMAGE;
  const theme = articleTheme(article);

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

      <main className="px-4 sm:px-6 pt-10 md:pt-16 pb-16 md:pb-24">
        <article className="max-w-[720px] mx-auto">
          <Link to="/articles" className="text-[15px] font-medium text-ink-soft underline underline-offset-4 hover:text-ink">
            All writing
          </Link>

          <header className="mt-8 mb-10 pb-8 border-b border-rule">
            <p className="flex items-center gap-2.5 text-[15px] text-ink-soft">
              <span className={`w-2.5 h-2.5 rounded-[2px] ${themeMark[theme]}`} aria-hidden="true" />
              {article.category}
              <span aria-hidden="true">·</span>
              {formatDate(article.publishDate)}
            </p>
            <h1 className="mt-4 font-serif font-semibold text-[clamp(34px,5vw,52px)] leading-[1.08] tracking-[-0.02em] [text-wrap:balance]">
              {article.title}
            </h1>
          </header>

          <div
            className="article-body"
            style={{ ["--accent" as string]: accent[theme] }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {(prevArticle || nextArticle) && (
            <nav aria-label="More writing" className="mt-16 pt-8 border-t border-rule grid sm:grid-cols-2 gap-6">
              {prevArticle ? (
                <Link to={`/articles/${prevArticle.slug}`} className="group grid gap-1.5">
                  <span className="text-sm text-ink-soft">Previous</span>
                  <span className="font-medium underline decoration-[#b9c4c2] group-hover:decoration-ink underline-offset-4">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : <span />}
              {nextArticle && (
                <Link to={`/articles/${nextArticle.slug}`} className="group grid gap-1.5 sm:text-right">
                  <span className="text-sm text-ink-soft">Next</span>
                  <span className="font-medium underline decoration-[#b9c4c2] group-hover:decoration-ink underline-offset-4">
                    {nextArticle.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
};

export default ArticlePost;
