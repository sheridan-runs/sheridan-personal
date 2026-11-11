import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { themeMark, type Theme } from "../lib/themes";

type Tool = { name: string; kind: string; href: string; domain: string; text: string; theme: Theme };

const tools: Tool[] = [
  {
    name: "Owly",
    kind: "Money dashboard",
    href: "https://owly.co.nz",
    domain: "owly.co.nz",
    text: "Track your debt, investments and net worth in one free NZ dashboard, then build a plan to pay your debt off faster. No bank login needed.",
    theme: "money",
  },
  {
    name: "Runway.Visualiser",
    kind: "Cash flow model",
    href: "https://yourbudget.xyz",
    domain: "yourbudget.xyz",
    text: "Privacy-first cash flow modelling for startups. See your burn rate and zero-cash date without connecting bank accounts.",
    theme: "biz",
  },
  {
    name: "Learn Xero",
    kind: "Automation audit",
    href: "https://learnxero.co.nz",
    domain: "learnxero.co.nz",
    text: "The unofficial efficiency audit for NZ businesses. Check your Xero health score and automate manual data entry in two minutes.",
    theme: "biz",
  },
  {
    name: "Spreadsheet School",
    kind: "Formula generator",
    href: "https://spreadsheet.school",
    domain: "spreadsheet.school",
    text: "Instant formula generators for VLOOKUP, IF, SUMIFS and more. A free cheat sheet for founders.",
    theme: "biz",
  },
  {
    name: "Sprix",
    kind: "Pace calculator",
    href: "https://sprix.run",
    domain: "sprix.run",
    text: "Marathon pace band generator and race strategy calculator. See your splits and print a wristband.",
    theme: "run",
  },
  {
    name: "18:38 parkrun PB",
    kind: "Race replay",
    href: "https://5k.runwith.club",
    domain: "5k.runwith.club",
    text: "An interactive replay of a parkrun PB, built from GPS, heart rate and audio.",
    theme: "run",
  },
  {
    name: "The Case for Running",
    kind: "Data manifesto",
    href: "https://thecaseforrunning.com",
    domain: "thecaseforrunning.com",
    text: "The economic and public health return of mass-participation running events, for civic leaders and race directors.",
    theme: "run",
  },
  {
    name: "Bucket",
    kind: "Conservation fundraising",
    href: "https://hello.bucket.community",
    domain: "bucket.community",
    text: "A fundraising platform connecting donors directly with the people doing conservation work. Built for Fairground Foundation and launching late 2026.",
    theme: "impact",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Tools | Sheridan Jamieson</title>
        <meta name="description" content="Free tools I've built for money, business, running and conservation." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/projects" />
      </Helmet>

      <Nav />

      <main className="px-4 sm:px-6 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-[1120px] mx-auto">
          <header className="pb-8">
            <h1 className="font-serif font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.025em]">Tools</h1>
            <p className="mt-4 font-serif text-[clamp(18px,1.9vw,21px)] leading-relaxed text-ink-soft max-w-[34em]">
              Things I've built to solve specific problems in money, business, running and conservation. Each one opens on its own site.
            </p>
          </header>

          <ul className="border-t border-rule">
            {tools.map((t) => (
              <li key={t.name} className="border-b border-rule">
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[10px_minmax(0,1fr)] sm:grid-cols-[10px_minmax(0,1fr)_auto] gap-x-3.5 gap-y-1.5 py-5"
                >
                  <span className={`w-2.5 h-2.5 rounded-[2px] mt-[9px] ${themeMark[t.theme]}`} aria-hidden="true" />
                  <span className="min-w-0 grid gap-1">
                    <span className="text-lg">
                      <span className="font-serif font-semibold text-[clamp(20px,2.2vw,24px)] underline decoration-[#b9c4c2] group-hover:decoration-ink underline-offset-4">{t.name}</span>
                      <span className="text-ink-soft text-[15px]"> · {t.kind}</span>
                    </span>
                    <span className="text-[15px] text-ink-soft max-w-[52em]">{t.text}</span>
                  </span>
                  <span className="col-start-2 sm:col-start-3 sm:row-start-1 sm:pt-1.5 text-sm text-ink-soft whitespace-nowrap">
                    {t.domain}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
