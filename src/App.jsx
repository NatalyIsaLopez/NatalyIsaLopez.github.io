import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
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
import RetentionProject from "./pages/RetentionProject"; //Project #3
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

            {/* Path updated to bunge-lab */}
            <Route path="/project/bunge-lab" element={<ProjectDetail />} />

            {/* Path for Berkeley Mobile */}
            <Route path="/project/asuc-octo" element={<OCTOProject />} />

            {/* Path updated for Rentention Project */}
            <Route
              path="/projects/retention-ops"
              element={<RetentionProject />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
