import { ExternalLink, MapPin, Heart, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import Nav from '../components/Nav';

// Get the 2 most recent articles dynamically
const recentArticles = [...articles]
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  .slice(0, 2);

// Helper function to extract category styling logic and prevent TypeScript parser errors
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
        <title>Sheridan Jamieson | Finance, Strategy & Running</title>
        <meta name="description" content="Helping ambitious people and businesses find their edge. Director at Nurture, Founder of Run With Run Club, Head of Operations at One Percent Collective, and board member across the NZ not-for-profit sector." />
        <link rel="canonical" href="https://sheridanjamieson.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sheridanjamieson.com/" />
        <meta property="og:title" content="Sheridan Jamieson" />
        <meta property="og:description" content="Finance, Strategy & Running." />
        <meta property="og:image" content="https://sheridanjamieson.com/social-preview.jpg" />
      </Helmet>

      <Nav />

      {/* ── MAIN PAGE ── */}
      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center pt-14 p-6 selection:bg-rose-500 selection:text-white">

        {/* Background radial glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="max-w-5xl w-full space-y-12 relative z-10 animate-enter mt-12">

          {/* ── HEADER ── */}
          <section className="text-center space-y-6">
            <div className="relative inline-block group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl mx-auto transition-transform duration-500 group-hover:scale-105 relative z-10 bg-slate-800">
                <img
                  src="/profile.jpg"
                  alt="Sheridan Jamieson"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-4 border-[#0f172a] rounded-full z-20"></div>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Sheridan Jamieson
              </h1>
              <p className="text-slate-400 text-lg flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Palmerston North, NZ
              </p>
            </div>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
              Helping{' '}
              <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-white transition-colors duration-300 cursor-default">
                ambitious people
              </span>{' '}
              and businesses find their edge. From untangling{' '}
              <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-emerald-400 transition-colors duration-300 cursor-default">
                financial complexity
              </span>{' '}
              to optimising{' '}
              <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-[#D4FF00] transition-colors duration-300 cursor-default">
                training performance
              </span>
              , I provide the structure needed for sustainable growth and{' '}
              <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-orange-500 transition-colors duration-300 cursor-default">
                meaningful impact
              </span>
              .
            </p>
          </section>

          {/* ── 2×2 ROLE CARDS GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 1. Nurture */}
            <a
              href="https://nurture.kiwi/"
              target="_blank"
              rel="dofollow"
              className="group relative bg-[#1e293b]/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10 animate-nurture-mobile flex flex-col"
            >
              <div className="absolute top-6 right-6 text-slate-600 group-hover:text-rose-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-slate-800 group-hover:scale-105 transition-all duration-300 shadow-inner">
                <img src="/nurture.png" alt="Nurture Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">Nurture</h2>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Director & vCFO. Empowering impactful businesses with strategic financial guidance. Not just numbers — strategic oversight for clarity and balance.
              </p>
            </a>

            {/* 2. Run With Run Club */}
            <a
              href="https://runwith.club/"
              target="_blank"
              rel="dofollow"
              className="group relative bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-[#D4FF00]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4FF00]/10 animate-rwrc-mobile flex flex-col"
            >
              <div className="absolute top-6 right-6 text-zinc-600 group-hover:text-[#D4FF00] transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-zinc-900 group-hover:scale-105 transition-all duration-300 shadow-inner">
                <img src="/rwrc.png?v=ZOOM_FIX" alt="Run Club Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4FF00] transition-colors">Run With Run Club</h2>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                Founder & Coach. Adaptive plans that take you from 'Jogger' to 'Athlete'. Serious training delivered with empathy to prevent burnout.
              </p>
            </a>

            {/* 3. Board & Governance */}
            <Link
              to="/governance"
              className="group relative bg-[#1e293b]/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 flex flex-col"
            >
              <div className="absolute top-6 right-6 text-slate-600 group-hover:text-sky-400 transition-colors">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-slate-800/80 border border-slate-700 group-hover:scale-105 transition-all duration-300 group-hover:border-sky-500/40">
                <span className="text-xl">🏛️</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">Board & Governance</h2>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Finance Director & Board Member. Serving across the commercial and not-for-profit sectors — bringing financial rigour and strategic clarity to governance.
              </p>
            </Link>

            {/* 4. One Percent Collective */}
            <a
              href="https://www.onepercentcollective.org/"
              target="_blank"
              rel="dofollow"
              className="group relative bg-[#1e293b]/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 animate-opc-mobile flex flex-col"
            >
              <div className="absolute top-6 right-6 text-slate-600 group-hover:text-orange-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-slate-800 group-hover:scale-105 transition-all duration-300 shadow-inner">
                <img
                  src="/opc.png"
                  alt="One Percent Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Heart className="hidden w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">One Percent Collective</h2>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                Head of Operations. Making regular giving easy. 100% of your donation goes to charity, helping smaller Kiwi charities thrive.
              </p>
            </a>

          </div>

          {/* ── LATEST ARTICLES STRIP ── */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Latest Writing
              </h2>
              <Link
                to="/articles"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 group"
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
                  className="group flex flex-col gap-2 bg-[#1e293b]/60 border border-slate-800 rounded-xl p-5 hover:border-slate-600 hover:bg-[#1e293b]/80 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${getCategoryStyles(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-600">
                      {new Date(article.publishDate).toLocaleDateString('en-NZ', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors flex items-center gap-1 mt-auto pt-1">
                    Read article
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FOOTER ── */}
          <div className="text-center pb-6 border-t border-slate-800/60 pt-8">
            <div className="flex justify-center gap-6 text-xs text-slate-600 mb-4 flex-wrap">
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
