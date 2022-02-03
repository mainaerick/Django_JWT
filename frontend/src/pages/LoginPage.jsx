import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  let [signin, setSigning] = useState(true);
  let animate = () => {
    const container = document.getElementById("container");

    signin ? setSigning(false) : setSigning(true);
    !signin
      ? container.classList.add("right-panel-active")
      : container.classList.remove("right-panel-active");
  };

  return (
    <div className="login_page">
      <div className="container" id="container">
        {/* sign up */}

        <RegisterPage />
        {/* sign up */}

        {/* sign in */}
        <div className="form-container sign-in-container">
          <form onSubmit={loginUser}>
            <h1>Sign in</h1>
            <div className="social-container">
              {/* <Link to="" className="social">
                <i>
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </Link>
              <Link to="" className="social">
                <i>
                  <FontAwesomeIcon icon={faGooglePlus} />
                </i>
              </Link>
              <Link to="" className="social">
                <i>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
              </Link> */}
            </div>
            {/* <span>or use your account</span> */}
            <input
              required
              type="text"
              placeholder="Enter Username"
              name="username"
            />
            <input
              required
              type="password"
              placeholder="Enter password"
              name="password"
            />
            <Link></Link>
            {/* <Link to="">Forgot your password?</Link> */}
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={animate}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, There!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={animate}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
