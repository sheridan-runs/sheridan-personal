import { Link, useLocation } from 'react-router-dom';
import { Mail, Wrench, BookOpen, Briefcase } from 'lucide-react';

const Strava = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10.2325 9.87618L12.3215 5.75918L14.4095 9.87618H17.4745L12.3215 -0.294824L7.16748 9.87618H10.2325Z" transform="translate(0 2)" />
    <path d="M15.3875 17.944L13.2985 13.828H10.2335L15.3875 24.0001L20.5425 13.828H17.4765L15.3875 17.944Z" transform="translate(0 -2)" />
  </svg>
);

// LinkedIn SVG (lucide doesn't have a great one for brand use)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Nav() {
  const location = useLocation();

  const navLink = (to: string, icon: React.ReactNode, label: string) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
          isActive
            ? 'text-white bg-slate-800'
            : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
        }`}
      >
        {icon}
        <span className="hidden sm:inline">{label}</span>
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo — SJ mark only, spins on hover */}
        <Link to="/" className="group flex items-center">
          <img
            src="/favicon.png"
            alt="Sheridan Jamieson"
            className="w-7 h-7 rounded-full opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-[360deg]"
            style={{ transition: 'transform 0.5s ease, opacity 0.2s ease' }}
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {/* Social */}
          <a
            href="https://www.linkedin.com/in/sheridanjamieson"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-400 hover:text-[#0077b5] hover:bg-slate-800/60 transition-all text-sm font-medium"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://www.strava.com/athletes/106248796"
            target="_blank"
            rel="noopener noreferrer"
            title="Strava"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-400 hover:text-[#fc4c02] hover:bg-slate-800/60 transition-all text-sm font-medium"
          >
            <Strava className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Strava</span>
          </a>

          <div className="w-px h-4 bg-slate-700 mx-1" />

          {/* Site pages */}
          {navLink('/projects', <Wrench className="w-3.5 h-3.5" />, 'Tools')}
          {navLink('/articles', <BookOpen className="w-3.5 h-3.5" />, 'Articles')}
          {navLink('/governance', <Briefcase className="w-3.5 h-3.5" />, 'Governance')}

          <a
            href="mailto:sheridan@nurture.kiwi"
            className="ml-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all text-sm font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>

      </div>
    </nav>
  );
}
