import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Header } from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <PrivateRoute component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
