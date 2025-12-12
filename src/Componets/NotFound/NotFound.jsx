import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="notfound-section">
      <div className="notfound-card">
        <div className="notfound-visual">
          <h1 className="nf-code">404</h1>
          <p className="nf-sub">Page Not Found</p>
        </div>

        <div className="notfound-body">
          <h2 className="nf-title">We can't find that page</h2>
          <p className="nf-text">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="nf-actions">
            <Link to="/" className="btn btn-primary nf-btn-home">
              Go to Home
            </Link>
            <Link
              to="/trending"
              className="btn btn-outline-light nf-btn-trending"
            >
              View Trending
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
