import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div className="container-fluid">
      <Link className="navbar-brand font-weight-boldest" to="/">
        Worst Job Board
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fe fe-x"></i>
        </button>

        <Link
          className="navbar-btn btn btn-sm btn-primary-soft lift ml-auto ml-1"
          to="/post-a-job"
        >
          Post a job
        </Link>
        <Link
          className="navbar-btn btn btn-sm btn-primary lift ml-1"
          to="/jobs"
        >
          See all jobs
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
