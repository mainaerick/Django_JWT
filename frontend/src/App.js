import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Header } from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <PrivateRoute component={HomePage} path="/" exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
