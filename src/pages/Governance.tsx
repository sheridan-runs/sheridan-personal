import { ExternalLink, Briefcase, Globe, Heart, Shield, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";

const Governance = () => {
  return (
    <>
      <Helmet>
        <title>Governance & Board Roles | Sheridan Jamieson</title>
        <meta name="description" content="Combining commercial acumen with strategic vision. Board roles across commercial and not-for-profit sectors." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/governance" />
      </Helmet>

      <Nav />

      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center pt-14 p-6 selection:bg-sky-500 selection:text-white">
        
        {/* Background radial glow (Sky/Emerald mix for Governance) */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="max-w-4xl w-full space-y-16 relative z-10 animate-enter mt-12 md:mt-20">

          {/* ── HEADER ── */}
          <section className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Governance Portfolio
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Combining commercial acumen with strategic vision. I serve on boards that align with my expertise in finance, operational scaling, and social impact.
            </p>
          </section>

          {/* ── COMMERCIAL BOARDS ── */}
          <section className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">
              Commercial Boards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <a 
                href="https://studyspy.ac.nz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col justify-between bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-sky-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 rounded-full border border-sky-500/20">
                    Finance Director
                  </span>
                  <Briefcase className="w-5 h-5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-sky-400 transition-colors">StudySpy</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Overseeing financial strategy & forecasting for New Zealand's largest tertiary course comparison platform.
                  </p>
                </div>
              </a>
            </div>
          </section>

          {/* ── NOT-FOR-PROFIT & NGO ── */}
          <section className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">
              Not-for-Profit & NGO
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* Greenpeace */}
              <a 
                href="https://www.greenpeace.org/aotearoa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    Treasurer
                  </span>
                  <Globe className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">Greenpeace Aotearoa</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Providing forward-looking financial perspective and strategic oversight.
                  </p>
                </div>
              </a>

              {/* FARA NZ */}
              <a 
                href="https://www.fara.org.nz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-purple-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                    Board Trustee
                  </span>
                  <Shield className="w-5 h-5 text-slate-600 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-purple-400 transition-colors">FARA NZ</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Leading digital and operational governance. Ensuring the foundation has the technical infrastructure needed for advocacy and fundraising.
                  </p>
                </div>
              </a>

              {/* Fairground Foundation */}
              <a 
                href="https://www.fairground.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col justify-between h-full bg-[#1e293b]/40 border border-slate-800 rounded-xl p-6 hover:border-orange-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
                    Board Trustee
                  </span>
                  <Heart className="w-5 h-5 text-slate-600 group-hover:text-orange-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-orange-400 transition-colors">Fairground Foundation</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Serving as a strategic sounding board for community-focused philanthropy. Providing governance and technical oversight for Bucket.
                  </p>
                </div>
              </a>

            </div>
          </section>

          {/* ── CTA SECTION ── */}
          <section className="mt-16 pt-12 border-t border-slate-800/60">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#1e293b]/20 rounded-2xl p-8 border border-slate-800/50">
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold text-white mb-2">Looking for Board Expertise?</h2>
                <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                  I am open to discussing new governance opportunities with organisations seeking modern strategic thinking and commercial oversight.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/sheridanjamieson"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              >
                <Linkedin size={16} />
                Let's connect
              </a>
            </div>
          </section>

          {/* ── FOOTER ── */}
          <div className="text-center pb-8 pt-8">
            <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} Sheridan Jamieson. All Rights Reserved.
            </p>
          </div>

        </main>
      </div>
    </>
  );
};

export default Governance;
