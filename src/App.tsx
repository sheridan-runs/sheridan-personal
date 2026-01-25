import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticlePost from "./pages/ArticlePost";
import ScrollToTop from "./components/ScrollToTop"; // Ensure this component exists, or remove this line if you don't have it

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
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