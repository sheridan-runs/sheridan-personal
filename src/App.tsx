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
            <a href="mailto:sheridan@nurture.kiwi" className="text-slate-400 hover:text-white transition-colors hover:
