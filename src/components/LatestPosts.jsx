import React from "react";
import { Link } from "react-router-dom";

import illustration3 from "../assets/img/illustrations/illustration-3.png";

const LatestPosts = () => {
  const frontEndJobs = [];
  const fullStackJobs = [];

  return (
    <section className="py-8 py-md-10 bg-gradient-light">
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-12 col-md-6">
            <h6 className="text-uppercase text-primary font-weight-bold">
              Latest posts
            </h6>

            <h2>Check out our recent job posts.</h2>

            <p className="text-muted mb-6 mb-md-8">
              We scour thousands of job postings every week and aggregate them
              here for your convenience. and we only post the best
              opportunities.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src={illustration3} className="img-fluid" alt="." />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className="card card-border border-primary shadow-light-lg mb-6 mb-md-8"
              data-aos="fade-up"
            >
              <div className="card-body">
                <h6 className="text-uppercase text-primary d-inline-block mb-5 mr-1">
                  Front-end
                </h6>

                <span className="badge badge-rounded-circle badge-primary-soft">
                  <span>{frontEndJobs.length}</span>
                </span>

                <div>
                  <div className="list-group list-group-flush">
                    {frontEndJobs.map((job) => (
                      <Link
                        className="list-group-item text-reset text-decoration-none cursor-pointer"
                        to={`/job/${job.id}`}
                      >
                        <span className="font-weight-bold d-block">
                          {job.jobTitle}
                        </span>

                        <span className="d-inline-block font-size-sm text-muted mb-0 d-block">
                          {job.rateFrom} per
                          {job.frequency}
                        </span>
                        <span className="d-inline-block font-size-sm text-muted mb-0 d-block">
                          Rate unspecified
                        </span>

                        <span className="font-size-sm text-muted mb-0 d-block">
                          {job.headOfficeLocation}
                        </span>
                        {job.skills.map((skill) => (
                          <span className="badge badge-primary-soft mr-1">
                            {skill.display}
                          </span>
                        ))}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="card card-border border-success shadow-light-lg mb-6 mb-md-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body">
                <h6 className="text-uppercase text-success d-inline-block mb-5 mr-1">
                  Full Stack
                </h6>

                <span className="badge badge-rounded-circle badge-success-soft">
                  <span>{fullStackJobs.length}</span>
                </span>

                <div>
                  <div className="list-group list-group-flush">
                    {fullStackJobs.map((job) => (
                      <Link
                        className="list-group-item text-reset text-decoration-none cursor-pointer"
                        to={`/job/${job.id}`}
                      >
                        <span className="font-weight-bold d-block">
                          {job.jobTitle}
                        </span>
                        <span className="font-size-sm text-muted mb-0 d-block">
                          {job.experienceRequired === "OneYearOrLess" && (
                            <span>&lt; 1 year experience</span>
                          )}
                          {job.experienceRequired === "OneToTwo" && (
                            <span>&lt; 1-2 years experience</span>
                          )}
                          {job.experienceRequired === "TwoToThree" && (
                            <span>&lt; 2-3 years experience</span>
                          )}
                          {job.experienceRequired === "ThreeToFive" && (
                            <span>&lt; 3-5 years experience</span>
                          )}
                          {job.experienceRequired === "FivePlus" && (
                            <span>&lt; 5+ years experience</span>
                          )}
                          {job.experienceRequired === "TenPlus" && (
                            <span>&lt; 10+ years experience</span>
                          )}
                        </span>
                        <span className="font-size-sm text-muted mb-0 d-block">
                          {job.headOfficeLocation}
                        </span>
                        {job.skills.map((skill) => (
                          <span className="badge badge-primary-soft mr-1">
                            {skill.display}
                          </span>
                        ))}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center" data-aos="fade-up">
            <h3 className="mb-3 d-block">
              We have lots of front-end and full stack roles available
            </h3>
            <Link to="/jobs" className="btn btn-primary lift">
              See all job posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
