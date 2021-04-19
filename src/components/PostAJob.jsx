import React from "react";

export default function PostAJob() {
  return (
    <section className="pt-5 pt-md-11">
      <form className="needs-validation was-validated">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Post a job</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <div className="card mb-5">
                <div className="card-body">
                  <h3 className="card-title text-body">Overview</h3>
                  <div className="form-group large">
                    <label htmlFor="jobTitle">Job title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="Job title"
                      minLength="3"
                      required
                    />
                    <div className="invalid-feedback">
                      Job title is required
                    </div>
                    <div className="invalid-feedback">
                      Job title must be at least 3 characters long.
                    </div>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="category">Category</label>
                    <select
                      className="custom-select"
                      id="category"
                      name="category"
                      required
                    >
                      <option selected value="FrontEnd">
                        Front-end
                      </option>
                      <option value="FullStack">Full stack</option>
                    </select>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="experienceRequired">
                      Experience Required
                    </label>
                    <select
                      className="custom-select"
                      id="experienceRequired"
                      name="experienceRequired"
                      required
                    >
                      <option selected value="OneYearOrLess">
                        1 year or less
                      </option>
                      <option value="OneToTwo">1-2 years</option>
                      <option value="TwoToThree">2-3 years</option>
                      <option value="ThreeToFive">3-5 years</option>
                      <option value="FivePlus">5+ years</option>
                      <option value="TenPlus">10+ years</option>
                    </select>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="skills">Skills</label>

                    <div className="invalid-feedback d-block">
                      At least one skill is required
                    </div>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="jobis">Job is...</label>
                    <div>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-primary">
                          Remote
                        </button>
                        <button type="button" className="btn btn-primary">
                          On Site
                        </button>
                        <button type="button" className="btn btn-primary">
                          Remote &amp; On Site
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="establishment">
                      Head office location (if applicable)
                    </label>
                  </div>
                </div>
              </div>
              <div className="card mb-5">
                <div className="card-body">
                  <h3 className="card-title text-body">Rate</h3>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group large">
                        <label htmlFor="rateFrom">From (min)</label>
                        <input
                          type="number"
                          className="form-control"
                          id="rateFrom"
                          name="rateFrom"
                          placeholder="From (min)"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group large">
                        <label htmlFor="rateTo">To (max)</label>
                        <input
                          type="number"
                          className="form-control"
                          id="rateTo"
                          name="rateTo"
                          placeholder="To (max)"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group large">
                        <label htmlFor="frequency">Frequency</label>
                        <select
                          className="custom-select"
                          id="frequency"
                          name="frequency"
                          required
                        >
                          <option selected value="Day">
                            Day
                          </option>
                          <option value="Hour">Hour</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group large">
                        <label htmlFor="currency">Currency</label>
                        <select
                          className="custom-select"
                          id="currency"
                          name="currency"
                          required
                        >
                          <option selected value="GBP">
                            GBP (&pound;)
                          </option>
                          <option value="USD">USD (&#x24;)</option>
                          <option value="EUR">EUR (&euro;)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-5">
                <div className="card-body">
                  <h3 className="card-title text-body">Contract details</h3>
                  <div className="form-group large">
                    <label htmlFor="contractLength">Length</label>
                    <select
                      className="custom-select"
                      id="contractLength"
                      name="contractLength"
                      required
                    >
                      <option selected value="Under1Month">
                        Under 1 month
                      </option>
                      <option value="OneToThree">1-3 months</option>
                      <option value="ThreeToSix">3-6 months</option>
                      <option value="SixToTwelve">6-12 months</option>
                      <option value="TwelvePlus">12+ months</option>
                    </select>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="companyName">Company name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      placeholder="Company name"
                      minLength="2"
                      required
                    />
                    <div className="invalid-feedback">
                      Company name is required
                    </div>
                    <div className="invalid-feedback">
                      Company name must be at least 2 characters long.
                    </div>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="jobDescription">Job description</label>
                    <div className="invalid-feedback d-block">
                      Job description is required.
                    </div>
                  </div>
                  <div className="form-group large">
                    <label htmlFor="whereToApply">Where to apply</label>
                    <input
                      type="url"
                      className="form-control"
                      id="whereToApply"
                      name="whereToApply"
                      placeholder="https://yoursite.com/job/123/apply"
                    />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary mr-1">
                      Post job
                    </button>
                    <button type="reset" className="btn btn-default">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
