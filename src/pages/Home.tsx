import { ExternalLink, MapPin, ArrowRight, Leaf } from 'lucide-react';
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

        <main className="max-w-4xl w-full space-y-24 relative z-10 animate-enter mt-12 md:mt-20">

          {/* ── 1. THE ANCHOR (HERO) ── */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                  Sheridan Jamieson
                </h1>
                <p className="text-slate-400 text-base flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  Palmerston North, NZ
                </p>
              </div>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
                I translate complex problems into simple, effective systems. 
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                Whether I'm untangling <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-emerald-400 transition-colors duration-300 cursor-default">financial data</span>, writing <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-[#D4FF00] transition-colors duration-300 cursor-default">endurance training plans</span>, or building <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-orange-500 transition-colors duration-300 cursor-default">software for conservation</span>, my focus is always the same: helping ambitious people and organisations find their edge, sustainably.
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

          {/* ── 2. THE MAIN EVENT (BUCKET) ── */}
          <section className="w-full">
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Current Focus
              </h2>
            </div>
            
            <a
              href="https://bucket.community" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-[#1e293b]/40 border border-slate-700 rounded-2xl p-8 md:p-10 hover:border-orange-500/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f172a]"
            >
              <div className="absolute top-8 right-8 text-slate-500 group-hover:text-orange-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              
              <div className="max-w-2xl space-y-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-500/10 border border-orange-500/20">
                  <Leaf className="w-6 h-6 text-orange-500" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Bucket
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    Bucket is a conservation fundraising platform that connects everyday Kiwis who want to contribute directly to the work of the people out there protecting Aotearoa's wild places.
                  </p>
                </div>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed border-l-2 border-slate-700 pl-4">
                  Top up your personal Bucket wallet with as little as $5 a month. Your money sits there until you decide where it goes. <strong className="text-slate-200 font-semibold">More than a donation. A direct connection.</strong>
                </p>
              </div>
            </a>
          </section>

          {/* ── 3. THE PROOF (TWO LANES) ── */}
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Lane A: Software & Coaching */}
              <div className="flex flex-col h-full space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">
                  Software & Coaching
                </h2>
                
                <div className="flex flex-col gap-4 flex-1">
                  {/* Owly */}
                  <a href="https://owly.co.nz" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col justify-center bg-[#1e293b]/40 border border-slate-800 rounded-xl p-5 hover:border-teal-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-200 group-hover:text-teal-400 transition-colors">Owly</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">A free, privacy-first debt dashboard for New Zealanders. Visualise your loans in one place and build a smarter repayment strategy.</p>
                  </a>

                  {/* Run With */}
                  <a href="https://runwith.club/" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col justify-center bg-[#1e293b]/40 border border-slate-800 rounded-xl p-5 hover:border-[#D4FF00]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-200 group-hover:text-[#D4FF00] transition-colors">Run With Run Club</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#D4FF00] transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">Science-backed running coaching adapted for real people with real lives. Serious training delivered with empathy to prevent burnout.</p>
                  </a>

                  {/* Racetape */}
                  <a href="https://www.racetape.app/" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col justify-center bg-[#1e293b]/40 border border-slate-800 rounded-xl p-5 hover:border-[#D4FF00]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-200 group-hover:text-[#D4FF00] transition-colors">Racetape</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#D4FF00] transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">An analysis tool for Strava users to visualise training blocks and prepare data summaries for AI coaches.</p>
                  </a>
                </div>
              </div>

              {/* Lane B: Governance & Operations */}
              <div className="flex flex-col h-full space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">
                  Governance & Operations
                </h2>
                
                <div className="flex flex-col gap-4 flex-1">
                  {/* Greenpeace */}
                  <a href="https://www.greenpeace.org/aotearoa/" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col justify-center bg-[#1e293b]/40 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">Greenpeace Aotearoa</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">Board Member & Treasurer.</p>
                  </a>

                  {/* Nurture */}
                  <a href="https://nurture.kiwi/" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col justify-center bg-[#1e293b]/40 border border-slate-800 rounded-xl p-5 hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-200 group-hover:text-white transition-colors">Nurture</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">Director & vCFO. Empowering impactful businesses to achieve sustainable growth through expert strategic guidance, turning financial complexity into clarity.</p>
                  </a>

                  {/* OPC */}
                  <a href="https://www.onepercentcollective.org/" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col justify-center bg-[#1e293b]/40 border border-slate-800 rounded-xl p-5 hover:border-rose-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-200 group-hover:text-rose-400 transition-colors">1% Collective</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-rose-400 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">Head of Operations. Making regular giving easy. A positive change subscription that lets Kiwis donate to multiple trusted charities with one simple signup.</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Governance Link placed below the grid to preserve alignment */}
            <div className="mt-4 flex md:justify-end">
              <Link to="/governance" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded">
                View full governance portfolio
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </section>

          {/* ── 4. THE THINKING (ARTICLES) ── */}
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
