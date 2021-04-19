import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Router path="/">
          <Landing />
        </Router>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
