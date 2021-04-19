import React from "react";
import { Link } from "react-router-dom";

export default function Job() {
  const job = {};

  return (
    <section className="pt-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            <Link
              href="/jobs"
              className="font-weight-bold font-size-sm text-decoration-none mb-3"
            >
              All listings
            </Link>

            <h1 className="display-4 mb-2">{job.jobTitle}</h1>

            <p className="font-size-lg text-gray-700 mb-2">
              {job.jobIs === "remote" && <span>Fully remote</span>}
              {job.jobIs === "onSite" && (
                <span>{job.headOfficeLocation || "On Site (Unspecified)"}</span>
              )}
              {job.jobIs === "both" && <span>Mix of remote and on site</span>}
            </p>

            <div className="mb-3">
              {job.skills.map((skill) => (
                <span className="badge badge-primary-soft mr-1">
                  {skill.display}
                </span>
              ))}
            </div>
          </div>
          <div className="col-auto">
            <Link
              href={job.whereToApply}
              target="_blank"
              rel="nofollow noopener"
              className="btn btn-primary"
            >
              Go to job and apply
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <hr className="my-6 my-md-8 border-gray-300" />
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 col-md-8"
            dangerouslySetInnerHTML={{ __html: job.jobDescription }}
          ></div>
          <div className="col-12 col-md-4">
            <div className="card shadow-light-lg mb-5">
              <div className="card-body">
                <h4>At a glance</h4>

                <ul className="list-slim">
                  <li>
                    {job.jobIs === "remote" && "Remote"}
                    {job.jobIs === "onSite" && "On Site"}
                    {job.jobIs === "both" && "Remote & On Site"}
                  </li>
                  <li>
                    {job.rateFrom} to
                    {job.rateTo} per
                    {job.frequency}
                  </li>
                  <li>
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
                  </li>
                </ul>

                <Link
                  href="/post-a-job"
                  className="font-weight-bold font-size-sm text-decoration-none"
                >
                  Post a job
                </Link>
              </div>
            </div>

            <div className="card shadow-light-lg">
              <div className="card-body">
                <h4>Have a job to post?</h4>

                <p className="font-size-sm text-gray-800">
                  Would you like to post your job on our website, completely
                  free?
                </p>

                <Link
                  href="/post-a-job"
                  className="font-weight-bold font-size-sm text-decoration-none"
                >
                  Post a job
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mt-5">
              <Link
                href={job.whereToApply}
                target="_blank"
                className="btn btn-primary"
              >
                Go to job and apply
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
