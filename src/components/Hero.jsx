import React from "react";

import backgroundImage from "../assets/img/covers/cover-3.jpg";

const Hero = () => (
  <section
    data-jarallax
    data-speed=".8"
    className="pt-10 pb-10 pt-md-10 pb-md-10 bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1
            className="display-3 font-weight-bold text-white"
            id="welcomeHeadingSource"
          >
            Outside IR35 jobs for <br />
            <span className="text-warning">Developers</span>
          </h1>

          <p className="font-size-lg text-white-80 mb-6">
            We help place the world's top tech talent at the some of the
            greatest companies in the world.
          </p>

          <a
            className="navbar-btn btn btn-lg btn-warning lift ml-1"
            href="/jobs"
          >
            Browse all developer jobs
            <i-feather name="arrow-right" className="float-right"></i-feather>
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
