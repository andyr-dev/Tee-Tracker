import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

export default function Nav() {
  const isLoggedIn = Auth.loggedIn();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <Link to="/scorecard">ScoreCard</Link>
            </li>
            <li className="nav-item">
              <Link to="/me" className="nav-link">
                {Auth.getProfile().data.username}'s profile
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={logout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
