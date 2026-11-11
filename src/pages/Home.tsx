import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { articleTheme, themeMark } from '../lib/themes';

const DESCRIPTION =
  'vCFO, running coach and founder of Owly. I help people and organisations get their numbers straight, then make good decisions with them.';

type WayKey = 'owly' | 'rwrc' | 'nurture';

const ways: { key: WayKey; audience: string; short: string; mark: string; pillOn: string; name: string; href: string; stat: string; text: string; cta: string; card: string; tone: string }[] = [
  {
    key: 'owly',
    audience: 'Personal finances',
    short: 'Personal',
    mark: 'bg-money',
    pillOn: 'bg-money-tint text-money',
    name: 'Owly',
    href: 'https://owly.co.nz',
    stat: '$25m+',
    text: 'of debt and investments tracked by Kiwis. See what you owe, what you own and your net worth in one free dashboard.',
    cta: 'Try Owly free',
    card: 'bg-money-tint border-money',
    tone: 'text-money',
  },
  {
    key: 'rwrc',
    audience: 'Running coaching',
    short: 'Running',
    mark: 'bg-run-mark',
    pillOn: 'bg-run-tint text-run',
    name: 'Run With Run Club',
    href: 'https://runwith.club',
    stat: '4,100+ km',
    text: 'run by my athletes in year one. Structured training for busy people, delivered with empathy.',
    cta: 'Apply for coaching',
    card: 'bg-run-tint border-run-mark',
    tone: 'text-run',
  },
  {
    key: 'nurture',
    audience: 'Business finances',
    short: 'Business',
    mark: 'bg-biz',
    pillOn: 'bg-biz-tint text-biz',
    name: 'Nurture',
    href: 'https://nurture.kiwi',
    stat: '40+ clients',
    text: 'since 2019. Long-term finance and accounting support that helps your business grow sustainably.',
    cta: 'Book a discovery call',
    card: 'bg-biz-tint border-biz',
    tone: 'text-biz',
  },
];

const boards = [
  { org: 'Greenpeace Aotearoa', role: 'Treasurer', theme: 'impact' },
  { org: 'StudySpy', role: 'Finance Director', theme: 'biz' },
  { org: 'Fairground Foundation', role: 'Trustee', theme: 'impact' },
  { org: 'FARA NZ', role: 'Trustee', theme: 'impact' },
  { org: 'One Percent Collective', role: 'Head of Operations', theme: 'impact' },
] as const;

const latest = [...articles]
  .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
  .slice(0, 4);

const monthYear = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-NZ', { month: 'short', year: 'numeric' });

const gutter = 'px-4 sm:px-6';
const inner = 'max-w-[1120px] mx-auto';
const rowGrid = 'grid grid-cols-[10px_minmax(0,1fr)_auto] gap-x-3.5 items-baseline py-3';
const marker = 'w-2.5 h-2.5 rounded-[2px] translate-y-px';

export default function Home() {
  const [running, setRunning] = useState(false);
  const [focus, setFocus] = useState<WayKey | null>(null);

  return (
    <>
      <Helmet>
        <title>Sheridan Jamieson | Making money make sense</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content="Sheridan Jamieson | Making money make sense" />
        <meta property="og:description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.sheridanjamieson.com/" />
      </Helmet>

      <Nav />

      <main>
        {/* Hero */}
        <section className={`${gutter} pt-10 md:pt-[88px] pb-9 md:pb-14`}>
          <div className={`${inner} grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_clamp(200px,26vw,300px)] sm:gap-x-10 lg:gap-x-14`}>
            <h1 className="sm:col-start-1 sm:row-start-1 sm:self-end font-serif font-semibold text-[clamp(44px,7.4vw,92px)] leading-none tracking-[-0.025em] [text-wrap:balance]">
              Making money make sense.
            </h1>

            {/* Two sides of the same person: hover (or tap) to switch between work and race day.
                The colour block behind the photo switches too: teal for work, lime for running. */}
            <figure className="order-last sm:order-none sm:col-start-2 sm:row-start-1 sm:row-span-3 sm:self-start m-0 mt-9 sm:mt-0 flex sm:grid items-center sm:content-start gap-6">
              <button
                type="button"
                // Mouse users get the swap on hover; touch and keyboard users toggle on tap/press
                onPointerEnter={(e) => e.pointerType === 'mouse' && setRunning(true)}
                onPointerLeave={(e) => e.pointerType === 'mouse' && setRunning(false)}
                onClick={(e) => (e.nativeEvent as PointerEvent).pointerType !== 'mouse' && setRunning((r) => !r)}
                aria-label={running ? 'Show Sheridan at work' : 'Show Sheridan on race day'}
                className="relative block shrink-0 w-[46%] sm:w-[calc(100%-14px)] ml-[10px] sm:ml-auto mb-[10px] sm:mb-[14px]"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 translate-x-[-10px] translate-y-[10px] sm:translate-x-[-14px] sm:translate-y-[14px] rounded-[10px] transition-colors duration-500 ${running ? 'bg-run-mark' : 'bg-money'}`}
                />
                <span className="relative block aspect-[4/5] overflow-hidden rounded-[10px] bg-band">
                  <img
                    src="/sheridan-work.jpg"
                    alt="Sheridan mid-conversation, explaining something with his hands"
                    width={640}
                    height={800}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${running ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img
                    src="/sheridan-running.jpg"
                    alt="Sheridan running the Wellington Marathon along Oriental Bay"
                    width={640}
                    height={800}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${running ? 'opacity-100' : 'opacity-0'}`}
                  />
                </span>
              </button>
              <figcaption className="flex sm:justify-center">
                <span className="inline-flex flex-col sm:flex-row rounded-2xl sm:rounded-full bg-band p-1 text-[15px] sm:text-sm font-medium" role="group" aria-label="Switch photo">
                  <button
                    type="button"
                    aria-pressed={!running}
                    onClick={() => setRunning(false)}
                    className={`px-3 py-1 rounded-full transition-colors ${!running ? 'bg-white shadow-sm text-ink' : 'text-ink-soft hover:text-ink'}`}
                  >
                    At work
                  </button>
                  <button
                    type="button"
                    aria-pressed={running}
                    onClick={() => setRunning(true)}
                    className={`px-3 py-1 rounded-full transition-colors ${running ? 'bg-white shadow-sm text-ink' : 'text-ink-soft hover:text-ink'}`}
                  >
                    On race day
                  </button>
                </span>
              </figcaption>
            </figure>

            <p className="mt-5 font-serif text-[clamp(18px,1.9vw,21px)] leading-relaxed text-ink-soft max-w-[36em]">
              I help people and organisations get their numbers straight, then make good decisions with them. Usually that means money. Sometimes it means marathon training.
            </p>
            <div className="flex gap-2.5 mt-6 self-start">
              <a href="https://owly.co.nz" className="bg-money text-white font-semibold px-4 sm:px-5 py-3 rounded-md whitespace-nowrap hover:bg-[#09494e] transition-colors">
                Try Owly free
              </a>
              <a href="#work" className="font-semibold px-4 sm:px-5 py-3 rounded-md whitespace-nowrap shadow-[inset_0_0_0_1.5px_#172626] hover:bg-band transition-colors">
                Work with me
              </a>
            </div>
          </div>
        </section>

        {/* Work with me */}
        <section id="work" className={`${gutter} pb-12 md:pb-[72px] scroll-mt-20`}>
          <div className={inner}>
            <h2 className="font-serif font-semibold text-[clamp(26px,3vw,32px)] leading-tight tracking-[-0.01em]">
              Work with me
            </h2>

            {/* Which card is for what. Picking one shows only that card while cards are stacked, or highlights it when they sit side by side. */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-4 mb-5" role="group" aria-label="Highlight a service">
              {ways.map((w) => {
                const on = focus === w.key;
                return (
                  <button
                    key={w.key}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setFocus(on ? null : w.key)}
                    className={`inline-flex items-center gap-2 h-9 px-3 sm:px-3.5 rounded-full text-[15px] font-medium transition-colors ${
                      on ? `${w.pillOn} shadow-[inset_0_0_0_1.5px_currentColor]` : 'shadow-[inset_0_0_0_1.5px_#dfe4e2] hover:shadow-[inset_0_0_0_1.5px_#172626]'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-[2px] ${w.mark}`} aria-hidden="true" />
                    <span className="sm:hidden">{w.short}</span>
                    <span className="hidden sm:inline">{w.audience}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid min-[1100px]:grid-cols-3 gap-2.5 md:gap-3">
              {ways.map((w) => {
                const dimmed = focus !== null && focus !== w.key;
                const picked = focus === w.key;
                return (
                  <a
                    key={w.key}
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative grid grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_1fr_auto] gap-x-3 rounded-[10px] border-t-[3px] md:border-t-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(23,38,38,0.35)] ${w.card} ${
                      dimmed ? 'max-[1099px]:hidden opacity-40 saturate-50' : ''
                    } ${picked ? 'shadow-[0_10px_24px_-12px_rgba(23,38,38,0.35)] -translate-y-0.5' : ''}`}
                  >
                    {w.key === 'owly' && (
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]">
                        <img
                          src="/owen-sketch.png"
                          alt=""
                          width={96}
                          height={137}
                          className="absolute right-3 -bottom-6 w-[72px] md:w-[76px] h-auto opacity-90 origin-bottom transition-transform duration-300 group-hover:-rotate-3 group-hover:-translate-y-1 motion-reduce:transition-none"
                        />
                      </span>
                    )}
                    <span className="col-start-1 row-start-1 pt-4 pl-4 md:pt-5 md:pl-5 font-serif font-semibold text-[28px] md:text-[clamp(28px,3vw,38px)] leading-none tracking-[-0.02em] whitespace-nowrap">
                      {w.stat}
                    </span>
                    <span className={`col-start-2 row-start-1 pt-[18px] pr-4 md:pt-[22px] md:pr-5 text-sm font-semibold text-right ${w.tone}`}>
                      {w.name}
                    </span>
                    <span className={`relative col-span-2 row-start-2 px-4 md:px-5 pt-2 md:pt-2.5 pb-3.5 md:pb-[18px] text-sm md:text-[15px] text-ink-soft ${w.key === 'owly' ? 'pr-[80px] md:pr-[88px]' : ''}`}>
                      {w.text}
                    </span>
                    <span className={`col-span-2 row-start-3 px-4 md:px-5 py-[11px] md:py-[13px] border-t border-ink/10 font-semibold ${w.tone} group-hover:underline underline-offset-[3px]`}>
                      {w.cta}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Boards and writing */}
        <section className={`${gutter} bg-band py-12 md:py-[72px]`}>
          <div className={`${inner} grid md:grid-cols-2 gap-10 md:gap-16`}>
            <div className="grid content-start gap-3.5 min-w-0">
              <h2 className="font-serif font-semibold text-[clamp(26px,3vw,32px)] leading-tight tracking-[-0.01em]">
                Boards and community
              </h2>
              <ul className="border-t border-rule">
                {boards.map((b) => (
                  <li key={b.org} className={`${rowGrid} border-b border-rule`}>
                    <span className={`${marker} ${themeMark[b.theme]}`} aria-hidden="true" />
                    <span className="font-medium">{b.org}</span>
                    <span className="text-sm text-ink-soft whitespace-nowrap">{b.role}</span>
                  </li>
                ))}
              </ul>
              <Link to="/governance" className="justify-self-start font-semibold underline underline-offset-4">
                More on my governance work
              </Link>
            </div>

            <div className="grid content-start gap-3.5 min-w-0">
              <h2 className="font-serif font-semibold text-[clamp(26px,3vw,32px)] leading-tight tracking-[-0.01em]">
                Writing
              </h2>
              <ul className="border-t border-rule">
                {latest.map((a) => (
                  <li key={a.slug} className="border-b border-rule">
                    <Link to={`/articles/${a.slug}`} className={`${rowGrid} group`}>
                      <span className={`${marker} ${themeMark[articleTheme(a)]}`} aria-hidden="true" />
                      <span className="font-medium underline decoration-[#b9c4c2] group-hover:decoration-ink underline-offset-4">
                        {a.title}
                      </span>
                      <span className="text-sm text-ink-soft whitespace-nowrap">{monthYear(a.publishDate)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/articles" className="justify-self-start font-semibold underline underline-offset-4">
                All {articles.length} articles
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
