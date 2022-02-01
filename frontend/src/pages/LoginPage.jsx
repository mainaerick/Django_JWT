import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
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
