import { Linkedin, Mail, ExternalLink, MapPin, Heart } from 'lucide-react';

// Custom Strava Icon Component to match Lucide style
const Strava = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.387 17.944l-2.089-4.116h-3.065l5.154 10.172 5.155-10.172h-3.066l-2.089 4.116zm-5.155-2.58l-1.91-3.764h-2.18l4.09 8.07 4.09-8.07h-2.179l-1.911 3.764z"/>
    <path d="M10.232 9.876l2.089-4.117 2.088 4.117h3.065l-5.153-10.171-5.154 10.171h3.065z" />
  </svg>
);

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
            Helping <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-white transition-colors duration-300 cursor-default">ambitious people</span> and businesses find their edge. From untangling <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-emerald-400 transition-colors duration-300 cursor-default">financial complexity</span> to optimising <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-[#D4FF00] transition-colors duration-300 cursor-default">training performance</span>, I provide the structure needed for sustainable growth and <span className="underline decoration-dotted decoration-slate-600 underline-offset-4 hover:text-orange-500 transition-colors duration-300 cursor-default">meaningful impact</span>.
          </p>

          <div className="flex justify-center gap-6 pt-2 items-center">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sheridanjamieson" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            
            {/* Strava - CORRECTED LINK */}
            <a href="https://www.strava.com/athletes/106248796" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#fc4c02] transition-colors hover:scale-110 transform duration-200">
              <Strava className="w-6 h-6" />
            </a>

            {/* Email */}
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
               <img src="/nurture.png" alt="Nurture Logo" className="w-full h-full object-cover scale-110" />
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
               <img src="/rwrc.png?v=ZOOM_FIX" alt="Run Club Logo" className="w-full h-full object-cover scale-110" />
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

            <div className="w-12 h-12 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-slate-800 group-hover:scale-105 transition-all duration-300 shadow-inner">
               <img 
                 src="/opc.png" 
                 alt="One Percent Logo" 
                 className="w-full h-full object-cover scale-110" 
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
