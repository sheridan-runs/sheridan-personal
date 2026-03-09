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

      <div className="min-h-screen bg-[#0f172a] text-slate-300 pt-14 p-6 md:p-12 selection:bg-sky-500 selection:text-white">
        <div className="max-w-3xl mx-auto mt-8">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Governance & Board Roles</h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Combining commercial acumen with strategic vision. I serve on boards that align with my expertise in finance, operational scaling, and social impact.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">

            {/* Commercial Boards */}
            <section>
              <h2 className="text-base md:text-lg font-bold uppercase tracking-widest text-slate-200 mb-5 border-b border-slate-700/80 pb-3">
                Commercial Boards
              </h2>
              <a href="https://studyspy.ac.nz/" target="_blank" rel="noreferrer" className="block group">
                <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 md:p-6 hover:border-sky-500/50 transition-all hover:bg-slate-800/60 hover:shadow-lg hover:shadow-sky-500/10 relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  <div className="absolute top-5 right-5 text-slate-500 group-hover:text-sky-400 transition-colors">
                    <ExternalLink size={18} />
                  </div>
                  <div className="shrink-0 w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1 pr-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">StudySpy</h3>
                    <p className="text-xs font-bold text-sky-400 mb-2 tracking-wider">FINANCE DIRECTOR</p>
                    <p className="text-slate-300 text-sm leading-relaxed m-0">
                      Overseeing financial strategy & forecasting for New Zealand's largest tertiary course comparison platform.
                    </p>
                  </div>
                </div>
              </a>
            </section>

            {/* Not-for-Profit & NGO */}
            <section>
              <h2 className="text-base md:text-lg font-bold uppercase tracking-widest text-slate-200 mb-5 border-b border-slate-700/80 pb-3">
                Not-for-Profit & NGO
              </h2>
              <div className="space-y-4">

                {/* Greenpeace */}
                 <a href="https://www.greenpeace.org/aotearoa/" target="_blank" rel="noreferrer" className="block group">
                <div className="block">
                  <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                      <Globe size={24} />
                    </div>
                    <div className="flex-1 pr-6">
                      <h3 className="text-xl font-bold text-white mb-1">Greenpeace Aotearoa</h3>
                      <p className="text-xs font-bold text-emerald-500 mb-2 tracking-wider">BOARD OBSERVER</p>
                      <p className="text-slate-300 text-sm leading-relaxed m-0">
                        Providing forward-looking financial perspective and strategic oversight.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FARA NZ */}
                <a href="https://www.fara.org.nz/" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 md:p-6 hover:border-purple-500/50 transition-all hover:bg-slate-800/60 hover:shadow-lg hover:shadow-purple-500/10 relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <div className="absolute top-5 right-5 text-slate-500 group-hover:text-purple-400 transition-colors">
                      <ExternalLink size={18} />
                    </div>
                    <div className="shrink-0 w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Shield size={24} />
                    </div>
                    <div className="flex-1 pr-6">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">FARA NZ</h3>
                      <p className="text-xs font-bold text-purple-500 mb-2 tracking-wider">BOARD TRUSTEE</p>
                      <p className="text-slate-300 text-sm leading-relaxed m-0">
                        Leading digital and operational governance. Ensuring the foundation has the technical infrastructure needed for advocacy and fundraising.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Fairground Foundation */}
                <a href="https://www.fairground.org/" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 md:p-6 hover:border-orange-500/50 transition-all hover:bg-slate-800/60 hover:shadow-lg hover:shadow-orange-500/10 relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <div className="absolute top-5 right-5 text-slate-500 group-hover:text-orange-400 transition-colors">
                      <ExternalLink size={18} />
                    </div>
                    <div className="shrink-0 w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Heart size={24} />
                    </div>
                    <div className="flex-1 pr-6">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">Fairground Foundation</h3>
                      <p className="text-xs font-bold text-orange-500 mb-2 tracking-wider">BOARD TRUSTEE</p>
                      <p className="text-slate-300 text-sm leading-relaxed m-0">
                        Serving as a strategic sounding board and advisory voice to help guide community-focused philanthropic initiatives.
                      </p>
                    </div>
                  </div>
                </a>

              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-12 bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/80 p-8 md:p-10 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-40"></div>
              <h2 className="text-2xl font-bold text-white mb-4">Looking for Board Expertise?</h2>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                I am open to discussing new governance opportunities with organisations seeking modern strategic thinking and commercial oversight.
              </p>
              <a
                href="https://www.linkedin.com/in/sheridanjamieson"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
              >
                <Linkedin size={20} />
                Discuss Board Opportunities
              </a>
            </section>

          </div>

          <div className="text-center mt-12 text-slate-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} Sheridan Jamieson
          </div>
        </div>
      </div>
    </>
  );
};

export default Governance;
