import React from "react";
import {Link} from 'react-router-dom'
//Import logo from file
import logo from '../../assets/Logo.png';

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="TeeTrackerLogo" className="logo" />

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
