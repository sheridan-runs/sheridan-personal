import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | Sheridan Jamieson</title>
        <meta name="description" content="The page you're looking for doesn't exist or may have moved." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Nav />

      <main className="px-4 sm:px-6 py-20 md:py-32">
        <div className="max-w-[1120px] mx-auto grid sm:grid-cols-[minmax(0,1fr)_auto] gap-10 items-center">
          <div>
            <h1 className="font-serif font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.025em]">Page not found</h1>
            <p className="mt-4 font-serif text-[clamp(18px,1.9vw,21px)] leading-relaxed text-ink-soft max-w-[30em]">
              That page doesn't exist or has moved. Try the homepage or my writing instead.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-7">
              <Link to="/" className="bg-money text-white font-semibold px-5 py-3 rounded-md hover:bg-[#09494e] transition-colors">
                Go to the homepage
              </Link>
              <Link to="/articles" className="font-semibold px-5 py-3 rounded-md shadow-[inset_0_0_0_1.5px_#172626] hover:bg-band transition-colors">
                Read my writing
              </Link>
            </div>
          </div>
          <img src="/owen-sketch.png" alt="Owen the owl, looking a bit lost" width={160} height={229} className="w-[120px] sm:w-[160px] h-auto" />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
