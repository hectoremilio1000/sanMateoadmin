import Blog from "pages/Blog";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home";
import NavBar from "./components/LayoutPrincipal/NavBar";
import Admin from "./pages/Admin";

function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/blog" component={Blog}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
