import React from "react";
import { Link } from "react-router-dom";

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
            Worst Job Board for <br />
            <span className="text-warning">Developers</span>
          </h1>

          <p className="font-size-lg text-white-80 mb-6">
            We help place the world's top tech talent at the some of the
            greatest companies in the world.
          </p>

          <Link
            className="navbar-btn btn btn-lg btn-warning lift ml-1"
            to="/jobs"
          >
            Browse all developer jobs
          </Link>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
