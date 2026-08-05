import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Sheridan Jamieson</title>
        <meta name="description" content="The page you're looking for doesn't exist or may have moved." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Nav />

      <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex flex-col items-center justify-center pt-14 p-6 text-center selection:bg-slate-300 selection:text-slate-900">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>

        <main className="relative z-10 animate-enter max-w-md space-y-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Page not found
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              That page doesn't exist or may have moved. Try one of the links below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
            >
              Back to Home
            </Link>
            <Link
              to="/articles"
              className="group inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-slate-400 hover:text-white transition-all text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
            >
              Read the Articles
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFound;
