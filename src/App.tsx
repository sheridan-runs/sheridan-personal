import { Linkedin, Mail, ExternalLink, MapPin, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center justify-center p-6 selection:bg-rose-500 selection:text-white">
      
      {/* --- Background Studio Light --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>

      {/* --- Main Content --- */}
      <main className="max-w-5xl w-full space-y-12 relative z-10 animate-enter">
        
        {/* --- Header --- */}
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
              <MapPin className="w-4 h-6" /> Palmerston North, NZ
            </p>
          </div>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
            Helping ambitious people and businesses find their edge. From untangling financial complexity to optimising training performance, I provide the structure needed for sustainable growth.
          </p>

          <div className="flex justify-center gap-6 pt-2">
            <a href="https://www.linkedin.com/in/sheridanjamieson" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sheridan@nurture.kiwi" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* --- The Trio Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Nurture (Data) */}
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
               <img src="/nurture.png" alt="Nurture Logo" className="w-full h-full object-contain p-1" />
            </div>

            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">Nurture</h2>
            <p className="text-slate-400 text-sm leading-relaxed flex-grow">
              Director & vCFO. Empowering impactful businesses with strategic financial guidance. Not just numbers—strategic oversight for clarity and balance.
            </p>
          </a>

          {/* 2. Run With Run Club (Sport) */}
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
               {/* FIX: Using [clip-path:inset(2px_round_8px)]
                  This surgically trims 2px off every edge to hide white pixels, 
                  then re-applies an 8px corner radius.
               */}
               <img src="/rwrc.png?v=5" alt="Run Club Logo" className="w-full h-full object-contain p-1 [clip-path:inset(2px_round_8px)]" />
            </div>

            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4FF00] transition-colors">Run With Run Club</h2>
            <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
              Founder & Coach. Adaptive plans that take you from 'Jogger' to 'Athlete'. Serious training delivered with empathy to prevent burnout.
            </p>
          </a>

          {/* 3. One Percent Collective (Charity) */}
          <a 
            href="https://www.onepercentcollective.org/" 
            target="_blank" 
            rel="dofollow"
            className="group relative bg-[#1e293b]/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 animate-opc-mobile flex flex-col"
          >
            <div className="absolute top-6 right-6 text-slate-600 group-hover:text-orange-400 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>

            <div className="w-12 h-12 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-slate-800 group-hover:scale-105 transition-all duration-300 shadow-inner group-hover:bg-white/5">
               <img 
                 src="/opc.png" 
                 alt="One Percent Logo" 
                 className="w-full h-full object-contain p-1.5" 
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
        
        <div className="text-center pb-6">
            <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
                &copy; {new Date().getFullYear()} Sheridan Jamieson. All Rights Reserved.
            </p>
        </div>

      </main>
    </div>
  );
}

export default App;
