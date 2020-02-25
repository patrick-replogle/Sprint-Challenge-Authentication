import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Jokes} />
    </div>
  );
}

export default App;
