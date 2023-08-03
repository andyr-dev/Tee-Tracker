import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";


// update Header info


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  
};
return (
  <header>
  <div className="header">
  <Link to="/" className="logo-link">
    <h1 className="logo-text">Log In</h1>
  </Link>
</div>
<div className="nav-container">
  {Auth.loggedIn() ? (
    <>
      <Link to="/me" className="nav-link">{Auth.getProfile().data.username}'s profile</Link>
      <button onClick={logout} className="logout-button">Logout</button>
    </>
  ) : (
    <>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/signup" className="nav-link">Signup</Link>
    </>
  )}
</div>
</header>
);
}
export default Header;
