import React, { useState } from "react";
import {Link} from 'react-router-dom'
// import Home from "../../pages/Home";
// import ScoreCard from "../../pages/ScoreCard";
// import Profile from "../../pages/Profile";

export default function Nav() {
  return (
    <nav>
      <ul>
        {/* replace text icons with icons from Material UI */}
        <Link to="/"> Home </Link>
        <Link to="/ScoreCard"> ScoreCard </Link>
        <Link to = "/me"> Profile </Link>
        <Link to = "/login" > Login </Link>
        <Link to = "/signup"> Signup </Link>
      </ul>
    </nav>
  );
}
