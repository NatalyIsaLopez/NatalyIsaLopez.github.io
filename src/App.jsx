import React, { useEffect } from "react";
import {
  HashRouter as Router, // Changed to HashRouter for GitHub Pages compatibility
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail"; // Bunge Lab Content
import OCTOProject from "./pages/OCTOProject"; // Berkeley Mobile Content
import RetentionProject from "./pages/RetentionProject"; // Churn Intelligence

// Scroll to Top Helper Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Bunge Lab Case Study */}
            <Route path="/project/bunge-lab" element={<ProjectDetail />} />

            {/* Berkeley Mobile Case Study */}
            <Route path="/project/asuc-octo" element={<OCTOProject />} />

            {/* RetentionOps Case Study */}
            <Route
              path="/projects/retention-ops"
              element={<RetentionProject />}
            />

            {/* Fallback to Home for broken links */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
