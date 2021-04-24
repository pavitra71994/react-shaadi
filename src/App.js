import React from "react";
import "./style.css";
import Login from "./Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Login} />
      </Switch>
    </div>
  );
}
