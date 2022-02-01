import { Route, Redirect } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ children, ...rest }) => {
  const isauthenticated = false;
  return (
    <Route {...rest}>
      {isauthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
