import { useContext, React } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const RegisterPage = () => {
  let { registerUser } = useContext(AuthContext);
  let animate = () => {
    // alert("hello");
    // const signUpButton = document.getElementById("signUp");
    // const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    // signUpButton.addEventListener("click", () => {
    // container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    // });
  };
  return (
    <div className="form-container sign-up-container">
      {/* sign up */}

      <form onSubmit={registerUser}>
        <h1>Create Account</h1>
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
        {/* <span>or use your email for registration</span> */}
        <input required type="text" placeholder="Username" name="username" />

        <input required type="text" placeholder="Firstname" name="firstname" />

        <input required type="text" placeholder="Lastname" name="lastname" />

        <input
          required
          type="password"
          placeholder="Password"
          name="password"
        />

        <input
          required
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />

        <input required type="text" placeholder="Email" name="email" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
