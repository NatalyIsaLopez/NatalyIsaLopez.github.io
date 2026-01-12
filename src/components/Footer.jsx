import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <p>© 2026 Nataly Lopez. Built with React.</p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/natalyisabellopez"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/NatalyIsaLopez"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:nataly.lopez@berkeley.edu">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
