import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { articleTheme, themeMark } from '../lib/themes';

const DESCRIPTION =
  'vCFO, running coach and founder of Owly. I help people and organisations get their numbers straight, then make good decisions with them.';

const ways = [
  {
    name: 'Owly',
    href: 'https://owly.co.nz',
    stat: '$25m+',
    text: 'of debt and investments tracked by Kiwis. See what you owe, what you own and your net worth in one free dashboard.',
    cta: 'Try Owly free',
    card: 'bg-money-tint border-money',
    tone: 'text-money',
  },
  {
    name: 'Run With Run Club',
    href: 'https://runwith.club',
    stat: '4,100+ km',
    text: 'run by my athletes in year one. Structured training for busy people, delivered with empathy.',
    cta: 'Apply for coaching',
    card: 'bg-run-tint border-run-mark',
    tone: 'text-run',
  },
  {
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
          <div className={`${inner} grid grid-cols-[minmax(0,1fr)_84px] sm:grid-cols-[minmax(0,1fr)_clamp(200px,24vw,280px)] gap-x-4 sm:gap-x-12 lg:gap-x-16`}>
            <h1 className="col-start-1 row-start-1 self-center sm:self-end font-serif font-semibold text-[clamp(44px,7vw,84px)] leading-none tracking-[-0.025em] [text-wrap:balance]">
              Making money make sense.
            </h1>
            <img
              src="/profile.jpg"
              alt="Sheridan Jamieson"
              width={280}
              height={350}
              className="col-start-2 row-start-1 sm:row-span-3 self-center sm:self-stretch w-[84px] h-[105px] sm:w-full sm:h-full sm:min-h-[260px] rounded-[10px] object-cover object-[50%_30%]"
            />
            <p className="col-span-2 sm:col-span-1 mt-5 font-serif text-[clamp(18px,1.9vw,21px)] leading-relaxed text-ink-soft max-w-[31em]">
              I help people and organisations get their numbers straight, then make good decisions with them. Usually that means money. Sometimes it means marathon training.
            </p>
            <div className="col-span-2 sm:col-span-1 flex flex-wrap gap-2.5 mt-6 self-start">
              <a href="https://owly.co.nz" className="bg-money text-white font-semibold px-5 py-3 rounded-md hover:bg-[#09494e] transition-colors">
                Try Owly free
              </a>
              <a href="#work" className="font-semibold px-5 py-3 rounded-md shadow-[inset_0_0_0_1.5px_#172626] hover:bg-band transition-colors">
                Ways to work with me
              </a>
            </div>
          </div>
        </section>

        {/* Work with me */}
        <section id="work" className={`${gutter} pb-12 md:pb-[72px] scroll-mt-20`}>
          <div className={inner}>
            <h2 className="font-serif font-semibold text-[clamp(26px,3vw,32px)] leading-tight tracking-[-0.01em] mb-5">
              Work with me
            </h2>
            <div className="grid min-[1100px]:grid-cols-3 gap-2.5 md:gap-3">
              {ways.map((w) => (
                <a
                  key={w.name}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group grid grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_1fr_auto] gap-x-3 rounded-[10px] border-t-[3px] md:border-t-4 ${w.card}`}
                >
                  <span className="col-start-1 row-start-1 pt-4 pl-4 md:pt-5 md:pl-5 font-serif font-semibold text-[28px] md:text-[clamp(28px,3vw,38px)] leading-none tracking-[-0.02em] whitespace-nowrap">
                    {w.stat}
                  </span>
                  <span className={`col-start-2 row-start-1 pt-[18px] pr-4 md:pt-[22px] md:pr-5 text-sm font-semibold text-right ${w.tone}`}>
                    {w.name}
                  </span>
                  <span className="col-span-2 row-start-2 px-4 md:px-5 pt-2 md:pt-2.5 pb-3.5 md:pb-[18px] text-sm md:text-[15px] text-ink-soft">
                    {w.text}
                  </span>
                  <span className={`col-span-2 row-start-3 px-4 md:px-5 py-[11px] md:py-[13px] border-t border-ink/10 font-semibold ${w.tone} group-hover:underline underline-offset-[3px]`}>
                    {w.cta}
                  </span>
                </a>
              ))}
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
