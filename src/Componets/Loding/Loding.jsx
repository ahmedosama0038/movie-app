import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}
