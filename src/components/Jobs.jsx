import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

const jobsQuery = {
  collection: "jobs",
  limitTo: 100,
};

export default function Jobs() {
  useFirestoreConnect(() => [jobsQuery]);

  const jobs = useSelector(({ firestore: { ordered } }) => ordered.jobs);

  if (!isLoaded(jobs)) {
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

  const frontEndJobs = jobs.filter(({ category }) => category === "FrontEnd");
  const fullStackJobs = jobs.filter(({ category }) => category === "FullStack");

  return (
    <section className="pt-6 pt-md-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <span className="badge badge-pill badge-primary-desat-soft mb-3">
              <span className="h6 text-uppercase">Jobs List</span>
            </span>

            <h2>
              Let’s find you an{" "}
              <span className="text-primary">open position</span>.
            </h2>

            <p className="font-size-lg text-gray-700 mb-7 mb-md-9">
              Helping you find the right developer role
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col">
            <h4 className="font-weight-bold mb-1">Front-end</h4>

            <p className="font-size-sm text-muted mb-0">
              Roles that have a preference for strong front-end skills.
            </p>
          </div>
          <div className="col-auto">
            <span className="badge badge-pill badge-success-soft">
              <span className="h6 text-uppercase">
                {frontEndJobs.length} openings
              </span>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive mb-7 mb-md-9">
              <table className="table table-align-middle">
                <thead>
                  <tr>
                    <th>
                      <span className="h6 text-uppercase font-weight-bold">
                        Role
                      </span>
                    </th>
                    <th>
                      <span className="h6 text-uppercase font-weight-bold">
                        Rate
                      </span>
                    </th>
                    <th>
                      <span className="h6 text-uppercase font-weight-bold">
                        Location
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {frontEndJobs.map((job) => (
                    <tr key={job.id}>
                      <td>
                        <Link
                          to={`/job/${job.id}`}
                          className="text-reset text-decoration-none"
                        >
                          <p className="mb-1">{job.jobTitle}</p>
                          <p className="font-size-sm text-muted mb-0">
                            <span className="font-size-sm text-muted mb-0 d-block">
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
                            </span>
                          </p>
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/job/${job.id}`}
                          className="text-reset text-decoration-none"
                        >
                          <span>
                            &pound;{job.rateFrom} per{" "}
                            {job.frequency.toLowerCase()}
                          </span>
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/job/${job.id}`}
                          className="text-reset text-decoration-none"
                        >
                          <p className="font-size-sm mb-0">
                            {job.jobIs === "remote" && (
                              <span>Fully remote</span>
                            )}
                            {job.jobIs === "onSite" && (
                              <span>
                                {job.headOfficeLocation ||
                                  "On Site (Unspecified)"}
                              </span>
                            )}
                            {job.jobIs === "both" && (
                              <span>Mix of remote and on site</span>
                            )}
                          </p>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col">
            <h4 className="font-weight-bold mb-1">Full stack</h4>

            <p className="font-size-sm text-muted mb-0">
              Roles that have a preference for a broad range of skills.
            </p>
          </div>
          <div className="col-auto">
            <span className="badge badge-pill badge-success-soft">
              <span className="h6 text-uppercase">
                {fullStackJobs.length} openings
              </span>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive mb-7 mb-md-9">
              <table className="table table-align-middle">
                <thead>
                  <tr>
                    <th>
                      <span className="h6 text-uppercase font-weight-bold">
                        Role
                      </span>
                    </th>
                    <th>
                      <span className="h6 text-uppercase font-weight-bold">
                        Rate
                      </span>
                    </th>
                    <th>
                      <span className="h6 text-uppercase font-weight-bold">
                        Location
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fullStackJobs.map((job) => (
                    <tr key={job.id}>
                      <td>
                        <Link
                          to={`/job/${job.id}`}
                          className="text-reset text-decoration-none"
                        >
                          <p className="mb-1">{job.jobTitle}</p>
                          <p className="font-size-sm text-muted mb-0">
                            <span className="font-size-sm text-muted mb-0 d-block">
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
                            </span>
                          </p>
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/job/${job.id}`}
                          className="text-reset text-decoration-none"
                        >
                          <span>
                            &pound;{job.rateFrom} per{" "}
                            {job.frequency.toLowerCase()}
                          </span>
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/job/${job.id}`}
                          className="text-reset text-decoration-none"
                        >
                          <p className="font-size-sm mb-0">
                            {job.jobIs === "remote" && (
                              <span>Fully remote</span>
                            )}
                            {job.jobIs === "onSite" && (
                              <span>
                                {job.headOfficeLocation ||
                                  "On Site (Unspecified)"}
                              </span>
                            )}
                            {job.jobIs === "both" && (
                              <span>Mix of remote and on site</span>
                            )}
                          </p>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
