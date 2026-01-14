import { Linkedin, Mail, ExternalLink, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 selection:bg-rose-500 selection:text-white">
      <main className="max-w-2xl w-full space-y-12">
        
        {/* --- Header --- */}
        <section className="text-center space-y-6">
          {/* Photo Container */}
          <div className="relative inline-block group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl mx-auto transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/profile.jpg" 
                alt="Sheridan Jamieson" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Status Dot */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-4 border-[#0f172a] rounded-full"></div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Sheridan Jamieson
            </h1>
            <p className="text-slate-400 text-lg flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> Palmerston North, NZ
            </p>
          </div>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
            Helping ambitious people and businesses find their edge. From untangling financial complexity to optimising training performance, I provide the structure needed for sustainable growth.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-2">
            <a href="https://www.linkedin.com/in/sheridanjamieson" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sheridan@nurture.kiwi" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* --- The Split Cards --- */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 1. Nurture (Data) */}
          <a 
            href="https://nurture.kiwi/" 
            target="_blank" 
            rel="dofollow"
            className="group relative bg-[#1e293b] border border-slate-700 rounded-2xl p-8 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-6 right-6 text-slate-600 group-hover:text-rose-400 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
            
            <div className="w-12 h-12 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-slate-800 group-hover:scale-105 transition-all duration-300">
               <img src="/nurture.png" alt="Nurture Logo" className="w-full h-full object-cover" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">Nurture</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Founder & Virtual CFO. Empowering impactful businesses with strategic financial guidance. Not just numbers—strategic oversight for clarity and balance.
            </p>
          </a>

          {/* 2. Run With Run Club (Sport) */}
          <a 
            href="https://runwith.club/" 
            target="_blank" 
            rel="dofollow"
            className="group relative bg-black border border-zinc-800 rounded-2xl p-8 hover:border-[#D4FF00]/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-6 right-6 text-zinc-600 group-hover:text-[#D4FF00] transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>

            <div className="w-12 h-12 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-zinc-900 group-hover:scale-105 transition-all duration-300">
               <img src="/rwrc.png" alt="Run Club Logo" className="w-full h-full object-cover" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4FF00] transition-colors">Run With Run Club</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Head Coach. Adaptive plans that take you from 'Jogger' to 'Athlete'. Serious training delivered with empathy to prevent burnout and hit goals.
            </p>
          </a>

        </div>
      </main>
    </div>
  );
}

export default App;
