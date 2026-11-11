import { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { articleTheme, themeMark } from "../lib/themes";

const formatDate = (dateString: string) =>
  new Date(dateString + "T00:00:00").toLocaleDateString("en-NZ", { month: "short", year: "numeric" });

const Articles = () => {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedArticles = [...articles].sort((a, b) =>
    sortOrder === "newest"
      ? b.publishDate.localeCompare(a.publishDate)
      : a.publishDate.localeCompare(b.publishDate)
  );

  return (
    <>
      <Helmet>
        <title>Writing | Sheridan Jamieson</title>
        <meta name="description" content="Writing on money, business, building software and running." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/articles" />
      </Helmet>

      <Nav />

      <main className="px-4 sm:px-6 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-[1120px] mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <div>
              <h1 className="font-serif font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.025em]">Writing</h1>
              <p className="mt-4 font-serif text-[clamp(18px,1.9vw,21px)] text-ink-soft max-w-[32em]">
                Notes on money, business, building software and running.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <label htmlFor="sortOrder" className="text-[15px] text-ink-soft">Sort</label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                className="h-[38px] rounded-md bg-white px-3 text-[15px] font-medium shadow-[inset_0_0_0_1.5px_#172626] cursor-pointer"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>
          </header>

          <ul className="border-t border-rule">
            {sortedArticles.map((a) => (
              <li key={a.slug} className="border-b border-rule">
                <Link
                  to={`/articles/${a.slug}`}
                  className="group grid grid-cols-[10px_minmax(0,1fr)] sm:grid-cols-[10px_minmax(0,1fr)_auto] gap-x-3.5 gap-y-1 py-5"
                >
                  <span className={`w-2.5 h-2.5 rounded-[2px] mt-[9px] ${themeMark[articleTheme(a)]}`} aria-hidden="true" />
                  <span className="min-w-0 grid gap-1">
                    <span className="font-serif font-semibold text-[clamp(20px,2.2vw,24px)] leading-snug underline decoration-[#b9c4c2] group-hover:decoration-ink underline-offset-4">
                      {a.title}
                    </span>
                    <span className="text-[15px] text-ink-soft max-w-[52em]">{a.description}</span>
                  </span>
                  <span className="col-start-2 sm:col-start-3 sm:row-start-1 text-sm text-ink-soft whitespace-nowrap sm:pt-1.5">
                    {a.category} · {formatDate(a.publishDate)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Articles;
