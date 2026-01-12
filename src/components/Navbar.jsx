import React from "react";
import { HashLink } from "react-router-hash-link"; // Import this
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          NATALY<span>.</span>
        </Link>
        <div className="nav-links">
          {/* Use HashLink to jump to IDs */}
          <HashLink smooth to="/#projects">
            Work
          </HashLink>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <a href="mailto:nataly.lopez@berkeley.edu">Contact</a>
          <a href="/resume.pdf" className="nav-resume" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
