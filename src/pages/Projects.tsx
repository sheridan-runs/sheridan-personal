import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Software & Tools | Sheridan Jamieson</title>
        <meta name="description" content="Utilities and software I've built to solve specific problems." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/projects" />
      </Helmet>

      <Nav />

      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center pt-14 p-6 selection:bg-sky-500 selection:text-white">
        
        {/* Background radial glow (Subtle Sky Blue for Tools) */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="max-w-4xl w-full space-y-12 relative z-10 animate-enter mt-12 md:mt-20">

          {/* ── HEADER ── */}
          <section className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Software & Tools
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Utilities I've built to solve specific problems across finance, endurance sports, and conservation.
            </p>
          </section>

          {/* ── THE TOOLKIT GRID ── */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Bucket (Moved into grid) */}
              <a href="https://hello.bucket.community" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-orange-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
                    Conservation Platform
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-orange-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-orange-400 transition-colors">Bucket</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    A fundraising platform connecting donors directly with the 'doers' on the ground. Built for the Fairground Foundation. Launching late-2026.
                  </p>
                </div>
              </a>

              {/* Owly */}
              <a href="https://owly.co.nz" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-teal-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 rounded-full border border-teal-500/20">
                    Financial Dashboard
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-teal-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-teal-400 transition-colors">Owly</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    The debt dashboard built for New Zealanders. See all your loans in one place and build a smarter repayment strategy.
                  </p>
                </div>
              </a>

              {/* Learn Xero */}
              <a href="https://learnxero.co.nz" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-pink-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 rounded-full border border-pink-500/20">
                    Automation Tool
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-pink-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-pink-400 transition-colors">Learn Xero</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    The unofficial efficiency audit for NZ businesses. Check your Xero health score and automate manual data entry in 2 minutes.
                  </p>
                </div>
              </a>

              {/* Sprix */}
              <a href="https://sprix.run" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-rose-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 rounded-full border border-rose-500/20">
                    Pace Calculator
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-rose-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-rose-400 transition-colors">Sprix</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Marathon pace band generator and race strategy calculator. Visualise splits and print wristbands.
                  </p>
                </div>
              </a>

              {/* Runway */}
              <a href="https://yourbudget.xyz" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                    Cash Flow Model
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">Runway.Visualiser</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Privacy-first cash flow modelling for startups. Visualise your burn rate and zero-cash date without connecting bank accounts.
                  </p>
                </div>
              </a>

              {/* Spreadsheet School */}
              <a href="https://spreadsheet.school" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    Educational Tool
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">Spreadsheet School</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Stop memorising syntax. Instant formula generators for VLOOKUP, IF, SUMIFS, and more. A free cheat sheet for founders.
                  </p>
                </div>
              </a>

              {/* 5k.runwith.club */}
              <a href="https://5k.runwith.club" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-[#D4FF00]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4FF00] bg-[#D4FF00]/10 rounded-full border border-[#D4FF00]/20">
                    Data Visualisation
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-[#D4FF00] transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-[#D4FF00] transition-colors">18:38 — Parkrun PB</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    An interactive scrolling experience documenting a Parkrun PB. Built with GPS data, heart rate, and Web Audio API for an immersive race replay.
                  </p>
                </div>
              </a>

              {/* The Case For Running */}
              <a href="https://thecaseforrunning.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-[#D4FF00]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4FF00] bg-[#D4FF00]/10 rounded-full border border-[#D4FF00]/20">
                    Data Manifesto
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-[#D4FF00] transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-[#D4FF00] transition-colors">The Case For Running</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    A data-backed manifesto proving the economic and public health ROI of mass-participation running events. Built for civic leaders and race directors.
                  </p>
                </div>
              </a>

            </div>
          </section>

          {/* ── FOOTER ── */}
          <div className="text-center pb-8 pt-8 border-t border-slate-800/60 mt-12">
            <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} Sheridan Jamieson. All Rights Reserved.
            </p>
          </div>

        </main>
      </div>
    </>
  );
};

export default Projects;
