import { ExternalLink, MapPin, Heart, Briefcase, ArrowRight, Leaf, Activity, PieChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import Nav from '../components/Nav';

// Get the 2 most recent articles dynamically
const recentArticles = [...articles]
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  .slice(0, 2);

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
        <meta name="description" content="I translate complex problems into simple, effective systems." />
        <link rel="canonical" href="https://sheridanjamieson.com/" />
      </Helmet>

      <Nav />

      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center pt-14 p-6 selection:bg-emerald-500 selection:text-white">
        
        {/* Background radial glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="max-w-5xl w-full space-y-16 relative z-10 animate-enter mt-12">

          {/* ── HEADER (Jargon-Free) ── */}
          <section className="text-center space-y-6">
            <div className="relative inline-block group">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl mx-auto transition-transform duration-500 group-hover:scale-105 relative z-10 bg-slate-800">
                <img
                  src="/profile.jpg"
                  alt="Sheridan Jamieson"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Sheridan Jamieson
              </h1>
              <p className="text-slate-400 text-base flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Palmerston North, NZ
              </p>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              I translate complex problems into simple, effective systems. Whether I'm untangling financial data, writing endurance training plans, or building software for conservation, my focus is always the same: helping ambitious people and organisations find their edge, sustainably.
            </p>
          </section>

          {/* ── THE ECOSYSTEM (BENTO BOX GRID) ── */}
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
              
              {/* BUCKET (Span 2 Columns) */}
              <a
                href="https://bucket.community" 
                target="_blank"
                rel="dofollow"
                className="group relative md:col-span-2 bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div className="flex justify-between items-start z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
                    Software / Launching 2026
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <div className="z-10 mt-4">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Bucket</h2>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                    A conservation fundraising platform connecting everyday Kiwis directly with the 'doers' on the ground to fund specific projects.
                  </p>
                </div>
                <Leaf className="absolute -bottom-4 -right-4 w-32 h-32 text-orange-500/5 rotate-12 group-hover:scale-110 transition-transform duration-500" />
              </a>

              {/* GREENPEACE (Span 1 Column) */}
              <div className="group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-start z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    Governance
                  </span>
                  <Globe className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="z-10 mt-4">
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Greenpeace Aotearoa</h2>
                  <p className="text-slate-400 text-sm">Board Member & Treasurer</p>
                </div>
              </div>

              {/* OWLY (Span 1 Column) */}
              <a
                href="https://owly.co.nz"
                target="_blank"
                rel="dofollow"
                className="group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div className="flex justify-between items-start z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 rounded-full border border-teal-500/20">
                    Software
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                </div>
                <div className="z-10 mt-4">
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">Owly</h2>
                  <p className="text-slate-400 text-sm">Visualise your debt and build a smarter repayment strategy.</p>
                </div>
              </a>

              {/* NURTURE (Span 1 Column) */}
              <a
                href="https://nurture.kiwi/"
                target="_blank"
                rel="dofollow"
                className="group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div className="flex justify-between items-start z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-slate-500/10 rounded-full border border-slate-500/20">
                    Advisory
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <div className="z-10 mt-4">
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-slate-200 transition-colors">Nurture</h2>
                  <p className="text-slate-400 text-sm">Director & vCFO providing strategic financial guidance.</p>
                </div>
              </a>

              {/* RUN WITH (Span 1 Column) */}
              <a
                href="https://runwith.club/"
                target="_blank"
                rel="dofollow"
                className="group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 hover:border-[#D4FF00]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div className="flex justify-between items-start z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4FF00] bg-[#D4FF00]/10 rounded-full border border-[#D4FF00]/20">
                    Coaching
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#D4FF00] transition-colors" />
                </div>
                <div className="z-10 mt-4">
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4FF00] transition-colors">Run With Run Club</h2>
                  <p className="text-slate-400 text-sm">Science-backed training to take you from jogger to athlete.</p>
                </div>
              </a>

              {/* RACETAPE (Span 1 Column - In Dev) */}
              <div className="group relative bg-[#1e293b]/30 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 flex flex-col justify-between overflow-hidden cursor-default">
                <div className="flex justify-between items-start z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                    In Development
                  </span>
                  <Activity className="w-4 h-4 text-indigo-900/50" />
                </div>
                <div className="z-10 mt-4">
                  <h2 className="text-xl font-bold text-slate-300 mb-1">Racetape</h2>
                  <p className="text-slate-500 text-sm">Strava analysis tool to prepare data summaries for AI coaches.</p>
                </div>
              </div>

              {/* ONE PERCENT COLLECTIVE & OTHER GOVERNANCE (Span 2 Columns) */}
              <div className="md:col-span-2 group relative bg-[#1e293b]/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center overflow-hidden">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 rounded-full border border-rose-500/20">
                      Operations & Impact
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">1% Collective & Fairground</h2>
                  <p className="text-slate-400 text-sm">Head of Operations at One Percent Collective. Trustee for Fairground Foundation and FARA NZ.</p>
                </div>
                <Briefcase className="w-12 h-12 text-slate-700 shrink-0 hidden md:block" />
              </div>

            </div>
          </section>

          {/* ── LATEST ARTICLES STRIP ── */}
          <section className="w-full pt-8">
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
                  className="group flex flex-col gap-2 bg-[#1e293b]/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-600 hover:bg-[#1e293b]/80 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${getCategoryStyles(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-600">
                      {new Date(article.publishDate).toLocaleDateString('en-NZ', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FOOTER ── */}
          <div className="text-center pb-6 border-t border-slate-800/60 pt-8 mt-12">
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
