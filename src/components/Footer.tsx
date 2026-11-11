import { Link } from 'react-router-dom';

const groups = [
  {
    title: 'Work with me',
    links: [
      { href: 'https://owly.co.nz', label: 'Owly' },
      { href: 'https://runwith.club', label: 'Run With Run Club' },
      { href: 'https://nurture.kiwi', label: 'Nurture' },
    ],
  },
  {
    title: 'On this site',
    links: [
      { to: '/articles', label: 'Writing' },
      { to: '/projects', label: 'Tools' },
      { to: '/governance', label: 'Governance' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { href: 'https://www.linkedin.com/in/sheridanjamieson', label: 'LinkedIn' },
      { href: 'https://www.strava.com/athletes/106248796', label: 'Strava' },
      { href: 'https://www.onepercentcollective.org/', label: 'One Percent Collective' },
    ],
  },
] as const;

const linkClass = 'text-[#dfe8e6] hover:underline underline-offset-[3px]';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-[#dfe8e6] px-4 sm:px-6 pt-12 md:pt-16 pb-7">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-4 sm:gap-x-5 lg:gap-x-8 gap-y-8">
          {/* Brand block: full row below desktop, Owen beside it on tablet, under it on phones */}
          <div className="col-span-3 lg:col-span-1 grid sm:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-1 gap-x-6 items-start">
            <div>
              <p className="font-serif font-semibold text-2xl text-white tracking-tight">Sheridan Jamieson</p>
              <p className="text-[15px] text-[#a9b9b6] mt-2 max-w-[24em]">
                vCFO, running coach and founder of Owly.
              </p>
              <a href="mailto:sheridan@nurture.kiwi" className="inline-block mt-3.5 font-semibold text-white hover:underline underline-offset-[3px]">
                sheridan@nurture.kiwi
              </a>
            </div>
            <div className="flex items-center gap-3.5 mt-5 sm:mt-0 lg:mt-5 sm:self-center lg:self-auto">
              <img
                src="/owen-sketch.png"
                alt="Owen the owl, hand-drawn by Sheridan"
                width={52}
                height={74}
                className="w-[52px] h-auto bg-white rounded-lg p-1.5"
              />
              <p className="text-sm text-[#a9b9b6] max-w-[14em]">
                Owen, the Owly mascot, started out as this doodle.
              </p>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title} className="min-w-0">
              <h2 className="text-sm font-semibold text-white mb-2.5">{g.title}</h2>
              <ul className="grid gap-1.5 text-[15px] sm:text-base">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {'to' in l ? (
                      <Link to={l.to} className={linkClass}>{l.label}</Link>
                    ) : (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-t border-[#33494a] mt-10 pt-5 text-sm text-[#a9b9b6]">
          <span>© {new Date().getFullYear()} Sheridan Jamieson</span>
          <span>Palmerston North, Aotearoa New Zealand</span>
        </div>
      </div>
    </footer>
  );
}
