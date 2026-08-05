import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticlePost from "./pages/ArticlePost";
import Projects from "./pages/Projects"; // <--- IMPORT THE NEW PAGE
import Governance from "./pages/Governance";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> {/* <--- ADDED NEW ROUTE */}
          <Route path="/governance" element={<Governance />} /> 
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticlePost />} />
          
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
