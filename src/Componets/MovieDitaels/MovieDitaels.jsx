import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loding/Loding";
import "./MovieDitaels.css";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  async function getMovie() {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`
      );
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  useEffect(() => {
    getMovie();
  }, [id]);

  if (!movieDetails) return <Loading />;

  return (
    <section className="movie-details-section">
      {/* Hero Section with Back Button */}
      <div
        className="movie-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(4,18,38,0.4) 0%, rgba(4,18,38,0.7) 60%, rgba(4,18,38,0.95) 100%), url("https://image.tmdb.org/t/p/original${
            movieDetails.backdrop_path || movieDetails.poster_path
          }")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="back-button-wrapper">
          <button className="btn-back">
            <i className="bi bi-arrow-left"></i> Back
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="movie-details-container">
        <div className="details-grid">
          {/* Poster Column */}
          <div className="poster-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movie-poster"
            />
          </div>

          {/* Details Column */}
          <div className="details-content">
            {/* Header */}
            <div className="details-header">
              <h1 className="movie-title">{movieDetails.title}</h1>
              <p className="tagline">{movieDetails.tagline}</p>
            </div>

            {/* Meta Information */}
            <div className="movie-meta">
              <div className="meta-item">
                <span className="meta-label">
                  <i className="bi bi-calendar-event"></i> Release
                </span>
                <span className="meta-value">{movieDetails.release_date}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="bi bi-clock"></i> Runtime
                </span>
                <span className="meta-value">{movieDetails.runtime} min</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="bi bi-globe"></i> Language
                </span>
                <span className="meta-value">
                  {movieDetails.original_language.toUpperCase()}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="bi bi-fire"></i> Popularity
                </span>
                <span className="meta-value">{movieDetails.popularity}</span>
              </div>
            </div>

            {/* Genres */}
            <div className="genres-section">
              <h3 className="section-title">Genres</h3>
              <div className="genres-badges">
                {movieDetails.genres.map((genre) => (
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
                    {movieDetails.vote_average}
                  </span>
                  <span className="rating-max">/10</span>
                </div>
                <div className="vote-info">
                  <span className="vote-count">
                    <i className="bi bi-hand-thumbs-up"></i>{" "}
                    {movieDetails.vote_count} votes
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              {movieDetails.homepage && (
                <a
                  href={movieDetails.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="bi bi-play-circle-fill"></i> Visit Homepage
                </a>
              )}
              <a
                href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="bi bi-link-45deg"></i> IMDB Page
              </a>
              <button className="btn btn-tertiary">
                <i className="bi bi-bookmark-plus"></i> Add to Watchlist
              </button>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <h3 className="section-title">Overview</h3>
          <p className="overview-text">{movieDetails.overview}</p>
        </div>

        {/* Production Information */}
        <div className="production-section">
          <h3 className="section-title">Production Details</h3>
          <div className="production-grid">
            <div className="production-card">
              <div className="prod-icon">
                <i className="bi bi-building"></i>
              </div>
              <h4 className="prod-label">Companies</h4>
              <p className="prod-value">
                {movieDetails.production_companies
                  .map((c) => c.name)
                  .join(", ")}
              </p>
            </div>
            <div className="production-card">
              <div className="prod-icon">
                <i className="bi bi-globe2"></i>
              </div>
              <h4 className="prod-label">Countries</h4>
              <p className="prod-value">
                {movieDetails.production_countries
                  .map((c) => c.name)
                  .join(", ")}
              </p>
            </div>
            <div className="production-card">
              <div className="prod-icon">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h4 className="prod-label">Budget</h4>
              <p className="prod-value">
                ${movieDetails.budget.toLocaleString()}
              </p>
            </div>
            <div className="production-card">
              <div className="prod-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <h4 className="prod-label">Revenue</h4>
              <p className="prod-value">
                ${movieDetails.revenue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
