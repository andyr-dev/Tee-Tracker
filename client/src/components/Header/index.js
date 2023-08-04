import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

// update Header info

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="TeeTrackerLogo" className="logo" />
      </Link>
    </header>
  );
}
