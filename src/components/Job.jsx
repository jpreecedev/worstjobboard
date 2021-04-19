import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";

const jobsQuery = {
  collection: "jobs",
  limitTo: 100,
};

export default function Job(...args) {
  const { jobId } = useParams();

  useFirestoreConnect(() => [jobsQuery]);

  const job = useSelector(({ firestore: { data } }) => {
    return data.jobs && data.jobs[jobId];
  });

  if (!isLoaded(job)) {
    return (
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            <Link
              to="/jobs"
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
                <span
                  key={skill.display}
                  className="badge badge-primary-soft mr-1"
                >
                  {skill.display}
                </span>
              ))}
            </div>
          </div>
          <div className="col-auto">
            <a
              href={job.whereToApply}
              target="_blank"
              rel="nofollow noopener"
              className="btn btn-primary"
            >
              Go to job and apply
            </a>
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
                    &pound;{job.rateFrom} to &pound;{job.rateTo} per{" "}
                    {job.frequency.toLowerCase()}
                  </li>
                  <li>
                    {job.experienceRequired === "OneYearOrLess" && (
                      <span>&lt; 1 year experience</span>
                    )}
                    {job.experienceRequired === "OneToTwo" && (
                      <span>1-2 years experience</span>
                    )}
                    {job.experienceRequired === "TwoToThree" && (
                      <span>2-3 years experience</span>
                    )}
                    {job.experienceRequired === "ThreeToFive" && (
                      <span>3-5 years experience</span>
                    )}
                    {job.experienceRequired === "FivePlus" && (
                      <span>5+ years experience</span>
                    )}
                    {job.experienceRequired === "TenPlus" && (
                      <span>10+ years experience</span>
                    )}
                  </li>
                </ul>

                <Link
                  to="/post-a-job"
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
                  to="/post-a-job"
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
              <a
                href={job.whereToApply}
                target="_blank"
                className="btn btn-primary"
              >
                Go to job and apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
