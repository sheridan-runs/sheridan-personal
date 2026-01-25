import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticlePost from "./pages/ArticlePost";
import Projects from "./pages/Projects"; // <--- IMPORT THE NEW PAGE
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> {/* <--- ADDED NEW ROUTE */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticlePost />} />
          
          {/* Catch-all 404 (Redirects to Home) */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
