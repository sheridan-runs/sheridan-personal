import { ExternalLink, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import Nav from '../components/Nav';

// Get the 2 most recent articles dynamically
const recentArticles = [...articles]
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  .slice(0, 2);

const stats = [
  { value: '$25m+', label: 'tracked on Owly', accent: 'text-teal-400' },
  { value: '41', label: 'Nurture clients, partnering for 3 years on average', accent: 'text-emerald-400' },
  { value: '4,100+ km', label: 'coached at Run With Run Club', accent: 'text-[#D4FF00]' },
  { value: '$6m+', label: 'raised for charities via One Percent Collective, at no cost to them', accent: 'text-rose-400' },
];

const alsoBuilding = [
  {
    name: 'Bucket',
    role: 'A Fairground Foundation initiative',
    href: 'https://bucket.community',
    description: 'A conservation fundraising platform connecting everyday Kiwis with the people protecting Aotearoa\'s wild places.',
    hover: 'hover:border-orange-500/40',
    titleHover: 'group-hover:text-orange-400',
  },
  {
    name: 'One Percent Collective',
    role: 'Head of Operations',
    href: 'https://www.onepercentcollective.org/',
    description: 'Making regular giving easy. Over $6m raised for smaller Kiwi charities, with 100% of donations passed on.',
    hover: 'hover:border-rose-500/40',
    titleHover: 'group-hover:text-rose-400',
  },
  {
    name: 'Racetape',
    role: 'Side project',
    href: 'https://www.racetape.app/',
    description: 'Turns your Strava history into structured training blocks anchored to your goal races.',
    hover: 'hover:border-[#D4FF00]/40',
    titleHover: 'group-hover:text-[#D4FF00]',
  },
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'Running & Training':
      return 'bg-[#D4FF00]/10 text-[#D4FF00]';
    case 'Finance':
      return 'bg-emerald-500/10 text-emerald-400';
    case 'Software':
      return 'bg-sky-500/10 text-sky-400';
    default:
      return 'bg-slate-700 text-slate-400';
  }
};

function Home() {
  return (
    <>
      <Helmet>
        <title>Sheridan Jamieson | Making money make sense</title>
        <meta name="description" content="Founder of Owly, vCFO at Nurture and board director. Making money make sense for households, founders and boards." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/" />
      </Helmet>

      <Nav />

      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center pt-14 p-6 selection:bg-emerald-500 selection:text-white">
        
        {/* Background radial glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="max-w-4xl w-full space-y-24 relative z-10 animate-enter mt-12 md:mt-20">

          {/* ── 1. THE ANCHOR (HERO) ── */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-3">Sheridan Jamieson</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                  Making money make sense.
                </h1>
              </div>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
                For households, founders and boards. I turn financial and operational complexity into decisions people can act on, and systems that last.
              </p>
              <p className="text-slate-400 text-base flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                Palmerston North, NZ
              </p>
            </div>

            <div className="shrink-0 relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl transition-transform duration-500 group-hover:scale-105 relative z-10 bg-slate-800">
                <img
                  src="/profile.jpg"
                  alt="Sheridan Jamieson"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </section>

          {/* ── 2. THE PROOF (STATS STRIP) ── */}
          <section aria-label="Track record" className="w-full -mt-8">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0f172a] p-5 md:p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className={`text-2xl md:text-3xl font-bold tracking-tight ${stat.accent}`}>{stat.value}</dd>
                  <dd className="text-xs md:text-sm text-slate-400 leading-snug mt-1">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ── 3. WORK WITH ME ── */}
          <section className="w-full">
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Work with me
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Owly (primary) */}
              <a
                href="https://owly.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="group md:col-span-2 relative block bg-[#1e293b]/40 border border-slate-700 rounded-2xl p-8 md:p-10 hover:border-teal-500/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f172a]"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">For households</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  See your debt clearly with Owly
                </h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                  A free, privacy-first debt dashboard for New Zealanders. See all your loans in one place and build a plan to pay them off faster.
                </p>
                <span className="inline-flex items-center gap-2 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm px-4 py-2.5 group-hover:bg-teal-400 transition-colors">
                  Try Owly free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>

              {/* Run With Run Club */}
              <a
                href="https://runwith.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-[#D4FF00]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4FF00] mb-3">For runners</p>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4FF00] transition-colors">
                  Train for your goal race
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  Run With Run Club coaching fits around work and kids, with a real human adjusting your plan when life gets busy.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 group-hover:text-[#D4FF00] transition-colors">
                  Start coaching
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>

              {/* Nurture */}
              <a
                href="https://nurture.kiwi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-[#1e293b]/40 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">For businesses</p>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Get a finance partner
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  Nurture provides vCFO support, forecasting and financial governance for impactful NZ businesses, for the long haul.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  Talk to Nurture
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </section>

          {/* ── 4. ALSO BUILDING & SUPPORTING ── */}
          <section className="w-full">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2 mb-6">
              Also building and supporting
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {alsoBuilding.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col bg-[#1e293b]/40 border border-slate-800 rounded-xl p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] ${item.hover}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-bold text-slate-200 transition-colors ${item.titleHover}`}>{item.name}</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-300 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{item.role}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* ── 5. GOVERNANCE (LOW-KEY) ── */}
          <section className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#1e293b]/20 border border-slate-800 rounded-xl p-6">
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                <span className="text-slate-200 font-semibold">Governance.</span> I'm Treasurer of Greenpeace Aotearoa and serve on the boards of StudySpy, Fairground Foundation and FARA NZ. I'm not actively seeking new roles, but I'm happy to talk if the fit is right.
              </p>
              <Link
                to="/governance"
                className="shrink-0 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-sky-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded"
              >
                Board portfolio
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </section>

          {/* ── 6. THE THINKING (ARTICLES) ── */}
          <section className="w-full pt-12 border-t border-slate-800/60">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Insights & Thinking
              </h2>
              <Link
                to="/articles"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded"
              >
                All articles
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  className="group flex flex-col gap-3 bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${getCategoryStyles(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(article.publishDate).toLocaleDateString('en-NZ', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FOOTER ── */}
          <div className="text-center pb-8 pt-12">
            <div className="flex justify-center gap-6 text-xs text-slate-600 mb-4 flex-wrap">
              <a href="https://owly.co.nz" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">owly.co.nz</a>
              <a href="https://nurture.kiwi" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">nurture.kiwi</a>
              <a href="https://runwith.club" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">runwith.club</a>
              <a href="https://onepercentcollective.org" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">onepercentcollective.org</a>
            </div>
            <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} Sheridan Jamieson. All Rights Reserved.
            </p>
          </div>

        </main>
      </div>
    </>
  );
}

export default Home;
