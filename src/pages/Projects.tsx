import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects & Tools | Sheridan Jamieson</title>
        <meta name="description" content="Utilities I've built to solve specific problems." />
        {/* ADD THIS LINE BELOW: */}
        <link rel="canonical" href="https://www.sheridanjamieson.com/projects" />
      </Helmet>

      {/* --- MATCHING YOUR EXACT WRAPPER --- */}
      <div className="min-h-screen bg-[#0f172a] text-slate-300 p-6 md:p-12 selection:bg-rose-500 selection:text-white">
        <div className="max-w-3xl mx-auto">
          
          {/* Back Button (Matched) */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects & Tools</h1>
            <p className="text-xl text-slate-400">Utilities I've built to solve specific problems.</p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            
            {/* Sprix */}
            <a href="https://sprix.run" target="_blank" rel="noreferrer" className="block group">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-rose-500/50 transition-all hover:shadow-lg hover:shadow-rose-500/10 relative">
                <div className="absolute top-8 right-8 text-slate-600 group-hover:text-rose-500 transition-colors">
                  <ExternalLink size={20} />
                </div>
                <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-rose-900/20">S</div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">Sprix</h2>
                <p className="text-slate-400 leading-relaxed">Marathon pace band generator and race strategy calculator. Visualise splits and print wristbands.</p>
              </div>
            </a>

            {/* Runway - (Fixed duplicated div nesting here) */}
             <a href="https://yourbudget.xyz" target="_blank" rel="noreferrer" className="block group">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 relative">
                <div className="absolute top-8 right-8 text-slate-600 group-hover:text-blue-500 transition-colors">
                  <ExternalLink size={20} />
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-blue-900/20">$</div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Runway.Visualiser</h2>
                <p className="text-slate-400 leading-relaxed">Privacy-first cash flow modelling for startups. Visualise your burn rate and zero-cash date without connecting bank accounts.</p>
              </div>
            </a>

            {/* Spreadsheet School */}
            <a href="https://spreadsheet.school" target="_blank" rel="noreferrer" className="block group">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 relative">
                <div className="absolute top-8 right-8 text-slate-600 group-hover:text-emerald-500 transition-colors">
                  <ExternalLink size={20} />
                </div>
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-emerald-900/20">#</div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Spreadsheet School</h2>
                <p className="text-slate-400 leading-relaxed">Stop memorising syntax. Instant formula generators for VLOOKUP, IF, SUMIFS, and more. A free cheat sheet for founders.</p>
              </div>
            </a>

          </div>
          
          <div className="text-center mt-16 text-slate-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} Sheridan Jamieson
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
