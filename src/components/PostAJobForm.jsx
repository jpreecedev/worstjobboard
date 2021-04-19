import React from "react";
import { Field, reduxForm } from "redux-form";

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...rest
}) => (
  <div className="form-group large">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} {...rest} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

const PostAJobForm = ({ handleSubmit }) => {
  return (
    <form
      className="needs-validation was-validated"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Post a job</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md">
            <div className="card mb-1">
              <div className="card-body">
                <h3 className="card-title text-body">Overview</h3>
                <Field
                  component={renderField}
                  validate={[required]}
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Job title"
                  label="Job title"
                  required
                />
                <div className="form-group large">
                  <label htmlFor="category">Category</label>
                  <Field
                    component="select"
                    className="custom-select"
                    id="category"
                    name="category"
                    required
                  >
                    <option value="FrontEnd">Front-end</option>
                    <option value="FullStack">Full stack</option>
                  </Field>
                </div>
                <div className="form-group large">
                  <label htmlFor="experienceRequired">
                    Experience Required
                  </label>
                  <Field
                    component="select"
                    className="custom-select"
                    id="experienceRequired"
                    name="experienceRequired"
                    required
                  >
                    <option value="OneYearOrLess">1 year or less</option>
                    <option value="OneToTwo">1-2 years</option>
                    <option value="TwoToThree">2-3 years</option>
                    <option value="ThreeToFive">3-5 years</option>
                    <option value="FivePlus">5+ years</option>
                    <option value="TenPlus">10+ years</option>
                  </Field>
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
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h3 className="card-title text-body">Rate</h3>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Field
                      component={renderField}
                      validate={[required]}
                      type="number"
                      className="form-control"
                      id="rateFrom"
                      name="rateFrom"
                      placeholder="From (min)"
                      label="From (min)"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Field
                      component={renderField}
                      validate={[required]}
                      label="To (max)"
                      type="number"
                      className="form-control"
                      id="rateTo"
                      name="rateTo"
                      placeholder="To (max)"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group large">
                      <label htmlFor="frequency">Frequency</label>
                      <Field
                        component="select"
                        className="custom-select"
                        id="frequency"
                        name="frequency"
                        required
                      >
                        <option value="Day">Day</option>
                        <option value="Hour">Hour</option>
                      </Field>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group large">
                      <label htmlFor="currency">Currency</label>
                      <Field
                        component="select"
                        className="custom-select"
                        id="currency"
                        name="currency"
                        required
                      >
                        <option value="GBP">GBP (&pound;)</option>
                        <option value="USD">USD (&#x24;)</option>
                        <option value="EUR">EUR (&euro;)</option>
                      </Field>
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
                  <Field
                    component="select"
                    className="custom-select"
                    id="contractLength"
                    name="contractLength"
                    required
                  >
                    <option value="Under1Month">Under 1 month</option>
                    <option value="OneToThree">1-3 months</option>
                    <option value="ThreeToSix">3-6 months</option>
                    <option value="SixToTwelve">6-12 months</option>
                    <option value="TwelvePlus">12+ months</option>
                  </Field>
                </div>
                <Field
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  placeholder="Company name"
                  label="Company name"
                  minLength="2"
                  required
                  component={renderField}
                  validate={[required]}
                />
                <Field
                  type="text"
                  className="form-control"
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="Job description"
                  label="Job description"
                  minLength="2"
                  required
                  component={renderField}
                  validate={[required]}
                />
                <Field
                  type="text"
                  className="form-control"
                  id="whereToApply"
                  name="whereToApply"
                  placeholder="https://yoursite.com/job/123/apply"
                  label="Where to apply"
                  minLength="2"
                  required
                  component={renderField}
                  validate={[required]}
                />
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
  );
};

export default reduxForm({
  form: "postAJob",
})(PostAJobForm);
