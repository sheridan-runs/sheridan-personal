import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { themeMark, type Theme } from "../lib/themes";

type Board = { org: string; role: string; href: string; domain: string; text: string; theme: Theme };

const commercial: Board[] = [
  {
    org: "StudySpy",
    role: "Finance Director",
    href: "https://studyspy.ac.nz/",
    domain: "studyspy.ac.nz",
    text: "Overseeing financial strategy and forecasting for New Zealand's largest tertiary course comparison platform.",
    theme: "biz",
  },
];

const notForProfit: Board[] = [
  {
    org: "Greenpeace Aotearoa",
    role: "Treasurer",
    href: "https://www.greenpeace.org/aotearoa/",
    domain: "greenpeace.org/aotearoa",
    text: "Providing forward-looking financial perspective and strategic oversight.",
    theme: "impact",
  },
  {
    org: "FARA NZ",
    role: "Trustee",
    href: "https://www.fara.org.nz/",
    domain: "fara.org.nz",
    text: "Leading digital and operational governance, so the foundation has the technical infrastructure it needs for advocacy and fundraising.",
    theme: "impact",
  },
  {
    org: "Fairground Foundation",
    role: "Trustee",
    href: "https://www.fairground.org/",
    domain: "fairground.org",
    text: "A strategic sounding board for community-focused philanthropy, with governance and technical oversight of Bucket.",
    theme: "impact",
  },
];

function BoardList({ title, boards }: { title: string; boards: Board[] }) {
  return (
    <section className="grid gap-4">
      <h2 className="font-serif font-semibold text-[clamp(24px,2.6vw,30px)] leading-tight tracking-[-0.01em]">{title}</h2>
      <ul className="border-t border-rule">
        {boards.map((b) => (
          <li key={b.org} className="grid grid-cols-[10px_minmax(0,1fr)] sm:grid-cols-[10px_minmax(0,1fr)_auto] gap-x-3.5 gap-y-1.5 py-5 border-b border-rule">
            <span className={`w-2.5 h-2.5 rounded-[2px] mt-2 ${themeMark[b.theme]}`} aria-hidden="true" />
            <div className="min-w-0 grid gap-1">
              <p className="text-lg">
                <span className="font-semibold">{b.org}</span>
                <span className="text-ink-soft"> · {b.role}</span>
              </p>
              <p className="text-[15px] text-ink-soft max-w-[44em]">{b.text}</p>
            </div>
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="col-start-2 sm:col-start-3 sm:row-start-1 sm:pt-1 justify-self-start text-sm text-ink-soft underline underline-offset-4 hover:text-ink whitespace-nowrap"
            >
              {b.domain}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const Governance = () => {
  return (
    <>
      <Helmet>
        <title>Governance | Sheridan Jamieson</title>
        <meta name="description" content="Board roles across commercial and not-for-profit organisations: Treasurer of Greenpeace Aotearoa, Finance Director at StudySpy, and trustee of Fairground Foundation and FARA NZ." />
        <link rel="canonical" href="https://www.sheridanjamieson.com/governance" />
      </Helmet>

      <Nav />

      <main className="px-4 sm:px-6 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-[1120px] mx-auto grid gap-12 md:gap-16">
          <header>
            <h1 className="font-serif font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.025em]">Governance</h1>
            <p className="mt-4 font-serif text-[clamp(18px,1.9vw,21px)] leading-relaxed text-ink-soft max-w-[34em]">
              I serve on boards where my finance, operations and social impact experience is useful, across commercial and not-for-profit organisations.
            </p>
          </header>

          <BoardList title="Commercial" boards={commercial} />
          <BoardList title="Not-for-profit" boards={notForProfit} />

          <section className="bg-band rounded-[10px] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <h2 className="font-serif font-semibold text-2xl tracking-[-0.01em]">Board enquiries</h2>
              <p className="mt-2 text-[15px] text-ink-soft max-w-[38em]">
                I'm not actively looking for new roles, but I'm happy to talk if the fit is right.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/sheridanjamieson"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 self-start md:self-auto inline-flex items-center h-[44px] px-5 rounded-md font-semibold shadow-[inset_0_0_0_1.5px_#172626] hover:bg-white transition-colors"
            >
              Message me on LinkedIn
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Governance;
