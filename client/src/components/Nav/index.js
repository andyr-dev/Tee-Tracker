import React from "react";
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <nav>
      <ul>
        {/* replace text icons with icons from Material UI */}
        <Link to="/"> Home </Link>
        <Link to="/scorecard"> ScoreCard </Link>
        <Link to = "/me"> Profile </Link>
        <Link to = "/login" > Login </Link>
        <Link to = "/signup"> Signup </Link>
      </ul>
    </nav>
  );
}
