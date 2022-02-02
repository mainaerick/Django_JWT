import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="nav">
      <div className="left">
        {" "}
        <Link className="logo" to="/">
          Home
        </Link>
      </div>
      <div className="right">
        <h3>Hello {user && user.name}</h3>
        {user ? (
          <button onClick={logoutUser}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};
