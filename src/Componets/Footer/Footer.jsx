import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-row">
            <div>
              <h5 className="footer-title">About Move App</h5>
              <p className="footer-about">
                Move App brings the latest movies and series in one clean,
                modern place. Browse featured titles, create a watchlist, and
                stay updated with new releases.
              </p>
            </div>

            <div>
              <h6 className="footer-title">Quick Links</h6>
              <ul className="list-unstyled footer-links">
                <li>
                  <Link to={''}>Home</Link>
                </li>
                <li>
                  <Link to={''}>Register</Link>
                </li>
                <li>
                  <Link to={''}>Login</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="footer-title">Follow Us</h6>
              <p className="mb-2">Join us on social media for updates.</p>
              <div className="social">
                <a className="social-link" to={''} aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a className="social-link" to={''} aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="social-link" to={''} aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="small">
              © {new Date().getFullYear()} Move App. All rights reserved.
            </div>
            <div className="legal-links">
              <Link to={''}>Privacy</Link>
              <Link to={''}>Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
