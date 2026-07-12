import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-shell">
        <Link to="/" className="nav-logo">
          NATALY<span>.</span>
        </Link>
        <div className="nav-links">
          <HashLink smooth to="/#work">
            Work
          </HashLink>
          <HashLink smooth to="/#thinking">
            Thinking
          </HashLink>
          <HashLink smooth to="/#responsible-systems">
            Responsible Systems
          </HashLink>
          <HashLink smooth to="/#experience">
            Experience
          </HashLink>
          <HashLink smooth to="/#skills">
            Skills
          </HashLink>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
          <a
            href="/Nataly_Lopez_Resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
