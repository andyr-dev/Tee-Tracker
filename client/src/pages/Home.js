import React from "react";
import logo from "../assets/Logo.png";
import golfCourse1 from "../assets/golfCourse1.png";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${golfCourse1})` }}>
      <div className="headerContainer">
        <Link to="/">
          <img src={logo} alt="TeeTrackerLogo" className="logo" />
        </Link>
        <h1>Tee Tracker</h1>
        <p>The Professional Choice</p>
      </div>
    </div>
  );
}
