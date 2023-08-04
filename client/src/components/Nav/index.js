import React from "react";
import {Link} from 'react-router-dom'
//Import logo from file


export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/scorecard">ScoreCard</Link>
        </li>
        <li className="nav-item">
          <Link to="/me">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
