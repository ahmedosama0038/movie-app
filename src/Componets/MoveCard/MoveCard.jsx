import React from "react";
import "./MoveCard.css";
import { Link } from "react-router-dom";

export default function MoveCard({ moviedetils }) {
  const {
    poster_path,
    title,
    overview,
    vote_count,
    release_date,
    vote_average,
    id,
    genres = [],
  } = moviedetils;
  return (
    <div className="col-md-6  col-lg-4 col-xl-3">
      <div className="movie-card">
        <div className="card-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="poster-image"
          />
          <div className="card-overlay">
            <div className="overlay-actions">
              <button className="btn-play" title="Play">
                <i className="bi bi-play-circle-fill"></i>
              </button>
              <Link
                to={`/movie/${id}`}
                className="btn-watchlist"
                title="Add to Watchlist"
              >
                <i className="bi bi-bookmark-plus "></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="card-content">
          <h2 className="card-title fw-bold">{title}</h2>

          <div className="card-meta">
            <span className="release-date">
              <i className="bi bi-calendar-event me-1"></i>
              {release_date
                ? new Date(release_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })
                : "N/A"}
            </span>
          </div>

          <p className="card-overview">
            {overview || "No description available."}
          </p>

          <div className="card-rating">
            <div className="rating-box">
              <span
                className={`rating-value ${
                  vote_average >= 7
                    ? "excellent"
                    : vote_average >= 5
                    ? "good"
                    : "average"
                }`}
              >
                {vote_average ? vote_average.toFixed(1) : "0.0"}
              </span>
              <span className="rating-max">/10</span>
            </div>
            <span className="vote-count">
              <i className="bi bi-people me-1"></i>
              {vote_count ? vote_count.toLocaleString() : "0"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
