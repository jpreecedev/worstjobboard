import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import PostAJob from "./components/PostAJob";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Router path="/jobs">
          <Jobs />
        </Router>
        <Router path="/job/:id">
          <Job />
        </Router>
        <Router path="/post-a-job">
          <PostAJob />
        </Router>
        <Router exact path="/">
          <Landing />
        </Router>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
