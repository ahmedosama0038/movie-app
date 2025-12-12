import React from "react";
import "./MovieDitaels.css";

export default function MovieDitaels() {
  // Static movie data with additional professional info
  const movieData = {
    poster_path: "/dKL78O9zxczVgjtNcQ9UkbYLzqX.jpg",
    backdrop_path: "/aHj7d7wSLqrg5cjAcgHhiGr97Ih.jpg",
    title: "The Running Man",
    original_title: "The Running Man",
    tagline: "Run or die. There's no middle ground.",
    genres: [
      { id: 28, name: "Action" },
      { id: 53, name: "Thriller" },
      { id: 878, name: "Science Fiction" },
    ],
    overview:
      "Desperate to save his sick daughter, working-class Ben Richards is convinced by The Running Man's charming but ruthless producer to enter the deadly competition game as a last resort. But Ben's defiance, instincts, and grit turn him into an unexpected fan favorite - and a threat to the entire system. As ratings skyrocket, so does the danger, and Ben must outwit not just the Hunters, but a nation addicted to watching him fall.",
    popularity: 155.0204,
    imdb_id: "tt14107334",
    homepage: "https://www.runningmanmovie.com",
    original_language: "en",
    release_date: "2025-11-11",
    vote_average: 6.7,
    vote_count: 295,
    budget: "60,000,000",
    revenue: "150,000,000",
    runtime: 116,
    production_companies: ["Paramount Pictures", "Entertainment 360"],
    production_countries: ["United States"],
  };

  // Recommendation movies
  const recommendedMovies = [
    { id: 1, title: "Total Recall", rating: 7.5 },
    { id: 2, title: "Judge Dredd", rating: 6.8 },
    { id: 3, title: "Escape Plan", rating: 6.9 },
  ];

  return (
    <section className="movie-details-section">
      {/* Hero Section with Back Button */}
      <div className="movie-hero">
        <div className="back-button-wrapper">
          <button className="btn-back">
            <i className="bi bi-arrow-left"></i>
            Back
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="movie-details-container">
        <div className="details-grid">
          {/* Poster Column */}
          <div className="poster-wrapper">
            <div className="poster-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.title}
                className="movie-poster"
              />
              <div className="poster-badge">
                <span className="rating-badge">
                  <i className="bi bi-star-fill"></i>
                  {movieData.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="details-content">
            {/* Header */}
            <div className="details-header">
              <h1 className="movie-title">{movieData.title}</h1>
              {movieData.tagline && (
                <p className="tagline">"{movieData.tagline}"</p>
              )}
              {movieData.original_title !== movieData.title && (
                <p className="original-title">{movieData.original_title}</p>
              )}
            </div>

            {/* Meta Information */}
            <div className="movie-meta">
              <div className="meta-item">
                <span className="meta-label">
                  <i className="bi bi-calendar-event"></i> Release
                </span>
                <span className="meta-value">
                  {new Date(movieData.release_date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="bi bi-clock"></i> Runtime
                </span>
                <span className="meta-value">{movieData.runtime} min</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="bi bi-globe"></i> Language
                </span>
                <span className="meta-value">
                  {movieData.original_language.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Genres */}
            <div className="genres-section">
              <h3 className="section-title">Genres</h3>
              <div className="genres-badges">
                {movieData.genres.map((genre) => (
                  <span key={genre.id} className="badge-genre">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="rating-section">
              <h3 className="section-title">Rating & Popularity</h3>
              <div className="rating-display">
                <div className="rating-box">
                  <span className="rating-value">
                    {movieData.vote_average.toFixed(1)}
                  </span>
                  <span className="rating-max">/10</span>
                </div>
                <div className="vote-info">
                  <span className="vote-count">
                    <i className="bi bi-hand-thumbs-up"></i>
                    {movieData.vote_count.toLocaleString()} votes
                  </span>
                  <span className="popularity-score">
                    <i className="bi bi-fire"></i>
                    {movieData.popularity.toFixed(1)} popularity
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <a
                href={movieData.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-play-circle-fill"></i>
                Visit Homepage
              </a>
              <a
                href={`https://www.imdb.com/title/${movieData.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="bi bi-link-45deg"></i>
                IMDB Page
              </a>
              <button className="btn btn-tertiary">
                <i className="bi bi-bookmark-plus"></i>
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <h3 className="section-title">Overview</h3>
          <p className="overview-text">{movieData.overview}</p>
        </div>

        {/* Production Info Section */}
        <div className="production-info-grid">
          <div className="info-card">
            <div className="info-icon">
              <i className="bi bi-building"></i>
            </div>
            <h4 className="info-title">Production Companies</h4>
            <p className="info-content">
              {movieData.production_companies.join(", ")}
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="bi bi-globe2"></i>
            </div>
            <h4 className="info-title">Countries</h4>
            <p className="info-content">
              {movieData.production_countries.join(", ")}
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <h4 className="info-title">Budget</h4>
            <p className="info-content">${movieData.budget}</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <i className="bi bi-graph-up"></i>
            </div>
            <h4 className="info-title">Revenue</h4>
            <p className="info-content">${movieData.revenue}</p>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="recommendations-section">
          <h3 className="section-title">Similar Movies</h3>
          <div className="recommendations-grid">
            {recommendedMovies.map((movie) => (
              <div key={movie.id} className="recommendation-card">
                <div className="rec-image">
                  <div className="rec-placeholder"></div>
                  <div className="rec-rating">
                    <i className="bi bi-star-fill"></i>
                    {movie.rating}
                  </div>
                </div>
                <h4 className="rec-title">{movie.title}</h4>
                <button className="btn-rec-watch">
                  <i className="bi bi-play-fill"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
