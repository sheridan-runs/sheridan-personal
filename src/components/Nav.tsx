import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/articles', label: 'Writing' },
  { to: '/projects', label: 'Tools' },
  { to: '/governance', label: 'Governance' },
];

const outlined =
  'inline-flex items-center h-[38px] px-3.5 rounded-md text-[15px] font-medium whitespace-nowrap shadow-[inset_0_0_0_1.5px_#172626] hover:bg-band transition-colors';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-rule px-4 sm:px-6"
    >
      <div className="max-w-[1120px] mx-auto h-16 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif font-semibold text-xl tracking-tight whitespace-nowrap">
          Sheridan Jamieson
        </Link>

        <div className="flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `hidden md:inline-flex px-3 py-2 rounded-md text-[15px] font-medium hover:bg-band transition-colors ${
                  isActive ? 'underline underline-offset-[6px] decoration-2' : ''
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href="#contact" className={`${outlined} ml-1.5 hidden min-[440px]:inline-flex`}>
            Get in touch
          </a>
          <button
            type="button"
            className={`${outlined} ml-1.5 md:hidden`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden max-w-[1120px] mx-auto pb-4">
          <ul className="grid border-t border-rule">
            {links.map((l) => (
              <li key={l.to} className="border-b border-rule">
                <Link to={l.to} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="block py-3 text-base font-medium">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
