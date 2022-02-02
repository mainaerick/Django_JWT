import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={loginUser}>
        <input type="text" placeholder="Enter Username" name="username" />
        <br />
        <br />

        <input type="password" placeholder="Enter password" name="password" />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
