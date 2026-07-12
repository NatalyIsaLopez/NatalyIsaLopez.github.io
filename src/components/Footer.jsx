import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© 2026 Nataly Lopez. Built with React and care.</p>
        <div className="footer-socials">
          <a href="mailto:nataly.lopez@berkeley.edu">Email</a>
          <a
            href="https://www.linkedin.com/in/natalyisabellopez"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/Nataly_Lopez_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a
            href="https://github.com/NatalyIsaLopez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
