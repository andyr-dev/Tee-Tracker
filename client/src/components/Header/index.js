import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";


// update Header info


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  return (
    <>
      <div>
        <Link to="/">
          <h1>Log In</h1>
        </Link>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link to="/me">{Auth.getProfile().data.username}'s profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </>
  );
};
}
export default Header;
