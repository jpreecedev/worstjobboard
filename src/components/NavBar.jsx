import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div className="container-fluid">
      <a className="navbar-brand font-weight-boldest" href="/">
        Outside IR35 Jobs
      </a>

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

        <a
          className="navbar-btn btn btn-sm btn-primary-soft lift ml-auto ml-1"
          href="/post-a-job"
        >
          Post a job
        </a>
        <a className="navbar-btn btn btn-sm btn-primary lift ml-1" href="/jobs">
          See all jobs
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
