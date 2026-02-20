import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Briefcase, Globe, Heart, Shield, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Governance = () => {
  return (
    <>
      <Helmet>
        <title>Governance & Board Roles | Sheridan Jamieson</title>
        <meta name="description" content="Combining commercial rigor with strategic vision. Board roles across commercial and not-for-profit sectors." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/governance" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-slate-300 p-6 md:p-12 selection:bg-sky-500 selection:text-white">
        <div className="max-w-3xl mx-auto">
          
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Governance & Board Roles</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Combining commercial rigor with strategic vision. I serve on boards that align with my expertise in finance, operational scaling, and social impact.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Commercial Boards */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-800 pb-4">
                Commercial Boards
              </h2>
              
              <a href="https://studyspy.ac.nz/" target="_blank" rel="noreferrer" className="block group">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-sky-500/50 transition-all hover:shadow-lg hover:shadow-sky-500/10 relative">
                  <div className="absolute top-8 right-8 text-slate-600 group-hover:text-sky-500 transition-colors">
                    <ExternalLink size={20} />
                  </div>
                  <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-lg flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">StudySpy</h3>
                  <p className="text-sm font-bold text-sky-500 mb-4 tracking-wide">FINANCE DIRECTOR</p>
                  <p className="text-slate-400 leading-relaxed">
                    Overseeing financial strategy & forecasting for New Zealand's largest tertiary course comparison platform.
                  </p>
                </div>
              </a>
            </section>

            {/* Not-for-Profit & NGO */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-800 pb-4">
                Not-for-Profit & NGO
              </h2>
              
              <div className="space-y-6">
                {/* Greenpeace */}
                <a href="https://www.greenpeace.org/aotearoa/" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 relative">
                    <div className="absolute top-8 right-8 text-slate-600 group-hover:text-emerald-500 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Greenpeace Aotearoa</h3>
                    <p className="text-sm font-bold text-emerald-500 mb-4 tracking-wide">BOARD OBSERVER</p>
                    <p className="text-slate-400 leading-relaxed">
                      Providing forward-looking financial perspective and strategic oversight.
                    </p>
                  </div>
                </a>

                {/* FARA NZ */}
                <a href="https://www.fara.org.nz/" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 relative">
                    <div className="absolute top-8 right-8 text-slate-600 group-hover:text-purple-500 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Shield size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">FARA NZ</h3>
                    <p className="text-sm font-bold text-purple-500 mb-4 tracking-wide">BOARD TRUSTEE</p>
                    <p className="text-slate-400 leading-relaxed">
                      Leading digital and operational governance. Ensuring the foundation has the technical infrastructure needed for advocacy and fundraising.
                    </p>
                  </div>
                </a>

                {/* Fairground Foundation */}
                <a href="https://www.fairground.org/" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 relative">
                    <div className="absolute top-8 right-8 text-slate-600 group-hover:text-orange-500 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                    <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Heart size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">Fairground Foundation</h3>
                    <p className="text-sm font-bold text-orange-500 mb-4 tracking-wide">BOARD TRUSTEE</p>
                    <p className="text-slate-400 leading-relaxed">
                      Serving as a strategic sounding board and advisory voice to help guide community-focused philanthropic initiatives.
                    </p>
                  </div>
                </a>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-16 bg-gradient-to-br from-slate-800/80 to-slate-900 border border-slate-700 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Looking for Board Expertise?</h2>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
                I am open to discussing new governance opportunities with organisations seeking modern strategic thinking and commercial oversight.
              </p>
              <a 
                href="https://www.linkedin.com/in/sheridanjamieson" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
              >
                <Linkedin size={20} />
                Discuss Board Opportunities
              </a>
            </section>

          </div>
          
          <div className="text-center mt-16 text-slate-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} Sheridan Jamieson
          </div>

        </div>
      </div>
    </>
  );
};

export default Governance;
