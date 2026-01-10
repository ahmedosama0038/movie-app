import React from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
 const Navigate=  useNavigate()

function handelLgout(){
  localStorage.removeItem('token')
Navigate('login')
}

  return (
    <nav className="movie-navbar">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo / Brand */}
        <Link
          className="brand d-flex align-items-center text-decoration-none"
          to="/"
        >
          <i className="bi bi-film fs-3 text-white" aria-hidden="true"></i>
          <h4 className="ms-2 brand-text mb-0">MOVE APP</h4>
        </Link>

        {/* CSS-only toggle for mobile (checkbox + label) */}
        <input
          className="nav-toggle-checkbox"
          type="checkbox"
          id="nav-toggle"
          aria-hidden
        />
        <label
          className="navbar-toggle d-md-none btn"
          htmlFor="nav-toggle"
          aria-label="Toggle navigation"
        >
          <span className="hamburger" aria-hidden></span>
        </label>

        {/* Navigation Links */}
        <div className="nav-links d-md-flex align-items-center">
          <ul className="nav-list d-md-flex align-items-center mb-0">
            <li>
              <NavLink
                className="nav-link px-2 d-flex align-items-center"
                to="/login"
              >
                <i className="bi bi-box-arrow-in-right me-2" aria-hidden></i>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link px-2 d-flex align-items-center btn-signup"
                to="/signup"
              >
                <i className="bi bi-person-plus me-2" aria-hidden></i>
                Signup
              </NavLink>
            </li>

            <li className="dropdown ms-md-2 mt-2 mt-md-0">
              <NavLink
                to="/trending"
                className={({ isActive }) =>
                  `nav-link dropdown-toggle d-flex align-items-center${
                    isActive ? " active" : ""
                  }`
                }
                tabIndex="0"
              >
                <i className="bi bi-fire me-2"></i>
                Trending
                <i className="bi bi-chevron-down ms-2" aria-hidden></i>
              </NavLink>
              <ul className="dropdown-menu shadow-sm">
                <li>
                  <NavLink
                    to={'/*'}
                    className={({ isActive }) =>
                      `dropdown-item d-flex align-items-center${
                        isActive ? " active" : ""
                      }`
                    }
                  >
                    <i className="bi bi-calendar-day me-2"></i>
                    Today
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trending/week"
                    className={({ isActive }) =>
                      `dropdown-item d-flex align-items-center${
                        isActive ? " active" : ""
                      }`
                    }
                  >
                    <i className="bi bi-calendar-week me-2"></i>
                    This Week
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/top-rated"
                    className={({ isActive }) =>
                      `dropdown-item d-flex align-items-center${
                        isActive ? " active" : ""
                      }`
                    }
                  >
                    <i className="bi bi-star me-2"></i>
                    Top Rated
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
               <button
      onClick={handelLgout}
      className="btn btn-outline-danger d-flex align-items-center gap-2"
    >
      <i className="bi bi-box-arrow-right"></i>
      Logout
    </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
