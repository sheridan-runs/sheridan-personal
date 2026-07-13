import { ExternalLink, MapPin, Heart, Briefcase, ArrowRight, Leaf, Activity, PieChart } from 'lucide-react';
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
        <title>Sheridan Jamieson | Impact Builder & Strategist</title>
        <meta name="description" content="I translate complex problems into efficient, scalable systems. Creator of Bucket, Owly, and Founder of Run With Run Club." />
        <link rel="canonical" href="https://sheridanjamieson.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sheridanjamieson.com/" />
        <meta property="og:title" content="Sheridan Jamieson" />
        <meta property="og:description" content="Impact Builder & Strategist." />
        <meta property="og:image" content="https://sheridanjamieson.com/social-preview.jpg" />
      </Helmet>

      <Nav />

      {/* ── MAIN PAGE ── */}
      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center pt-14 p-6 selection:bg-rose-500 selection:text-white">

        {/* Background radial glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="max-w-4xl w-full space-y-20 relative z-10 animate-enter mt-12">

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

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              I translate complex problems into efficient, scalable systems. Whether I'm building{' '}
              <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-emerald-400 transition-colors duration-300 cursor-default">
                civic technology
              </span>
              , untangling financial data, or coaching{' '}
              <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-[#D4FF00] transition-colors duration-300 cursor-default">
                endurance athletes
              </span>
              , my goal is to create sustainable, high-impact outcomes—without defaulting to the 24/7 hustle.
            </p>
          </section>

          {/* ── MAIN EVENT: BUCKET ── */}
          <section className="w-full">
            <div className="mb-6 border-l-2 border-orange-500/50 pl-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                01 / Current Focus
              </h2>
              <p className="text-slate-300">Right now, my absolute priority is building the infrastructure for grassroots conservation.</p>
            </div>
            
            <a
              href="https://bucket.community" 
              target="_blank"
              rel="dofollow"
              className="group block relative bg-gradient-to-br from-[#1e293b] to-black border-2 border-orange-500/30 rounded-3xl p-6 md:p-8 hover:border-orange-500/60 transition-all duration-300 shadow-xl shadow-orange-500/5 hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 text-slate-500 group-hover:text-orange-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-orange-500/10 border border-orange-500/20 group-hover:scale-105 transition-all duration-300">
                  <Leaf className="w-8 h-8 text-orange-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">Bucket</h2>
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
                      Launching 2026
                    </span>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                    A conservation fundraising platform connecting everyday Kiwis directly with the 'doers' on the ground. Making it entirely frictionless to fund specific projects and track real-world impact.
                  </p>
                </div>
              </div>
            </a>
          </section>

          {/* ── ACTIVE PROJECTS: 2 COLUMNS ── */}
          <section className="w-full">
            <div className="mb-6 border-l-2 border-slate-600 pl-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                02 / The Sandbox
              </h2>
              <p className="text-slate-300">Developing independent tools and communities to solve specific friction points in finance and athletic performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Column 1: Performance */}
              <div className="space-y-6">
                <a
                  href="https://runwith.club/"
                  target="_blank"
                  rel="dofollow"
                  className="group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-[#D4FF00]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-48"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-zinc-900 shadow-inner">
                      <img src="/rwrc.png?v=ZOOM_FIX" alt="Run Club" className="w-full h-full object-cover scale-110" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-[#D4FF00] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#D4FF00] transition-colors">Run With Run Club</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Founder & Coach. Adaptive plans that take you from 'Jogger' to 'Athlete'. Serious training delivered with empathy to prevent burnout.
                  </p>
                </a>

                {/* Racetape - In Development (Not clickable) */}
                <div className="group relative bg-[#1e293b]/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex flex-col h-48 cursor-default">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/5 border border-indigo-500/10">
                      <Activity className="w-5 h-5 text-indigo-900/50" />
                    </div>
                    <span className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                      In Development
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-300 mb-1">Racetape</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    A running analysis tool for Strava users to visualise training blocks and prepare data summaries for AI coaches. 
                  </p>
                </div>
              </div>

              {/* Column 2: Sandbox / Tech */}
              <div className="space-y-6">
                <a
                  href="https://owly.co.nz"
                  target="_blank"
                  rel="dofollow"
                  className="group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-48"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-500/10 border border-teal-500/20">
                      <PieChart className="w-5 h-5 text-teal-400" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">Owly</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The debt dashboard built for New Zealanders. See all your loans in one place, visualise your data, and build a smarter repayment strategy.
                  </p>
                </a>
              </div>

            </div>
          </section>

          {/* ── THE ENGINE ROOM (FOUNDATION) ── */}
          <section className="w-full pt-8 border-t border-slate-800/60">
            <div className="mb-6 text-center max-w-xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                03 / The Engine Room
              </h2>
              <p className="text-slate-400 text-sm">All of this is underpinned by my day-to-day work—bringing strategic oversight and financial rigour to ambitious organisations.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Nurture */}
              <a href="https://nurture.kiwi/" target="_blank" rel="dofollow" className="group p-5 rounded-xl border border-slate-800/50 bg-[#1e293b]/30 hover:bg-[#1e293b]/60 hover:border-slate-700 transition-all flex items-center gap-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100">
                <div className="w-8 h-8 rounded shrink-0 bg-slate-800 overflow-hidden">
                  <img src="/nurture.png" alt="Nurture" className="w-full h-full object-cover scale-110" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-300 group-hover:text-white">Nurture</h3>
                  <p className="text-xs text-slate-500">Director & vCFO</p>
                </div>
              </a>

              {/* OPC */}
              <a href="https://www.onepercentcollective.org/" target="_blank" rel="dofollow" className="group p-5 rounded-xl border border-slate-800/50 bg-[#1e293b]/30 hover:bg-[#1e293b]/60 hover:border-slate-700 transition-all flex items-center gap-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100">
                <div className="w-8 h-8 rounded shrink-0 bg-slate-800 overflow-hidden flex items-center justify-center">
                  <img src="/opc.png" alt="One Percent" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                  <Heart className="hidden w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-300 group-hover:text-white">1% Collective</h3>
                  <p className="text-xs text-slate-500">Head of Operations</p>
                </div>
              </a>

              {/* Governance */}
              <Link to="/governance" className="group p-5 rounded-xl border border-slate-800/50 bg-[#1e293b]/30 hover:bg-[#1e293b]/60 hover:border-slate-700 transition-all flex items-center gap-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100">
                <div className="w-8 h-8 rounded shrink-0 bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-300 group-hover:text-white">Governance</h3>
                  <p className="text-xs text-slate-500">Board Member / Trustee</p>
                </div>
              </Link>

            </div>
          </section>

          {/* ── LATEST ARTICLES STRIP ── */}
          <section className="w-full pt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                04 / Latest Writing
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
              <a href="https://thecaseforrunning.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">thecaseforrunning.com</a>
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
