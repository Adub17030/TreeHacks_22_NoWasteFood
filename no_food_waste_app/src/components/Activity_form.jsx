import React from "react";

function Activity_form() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-12">
          <h4>How far did you go today?</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="activity_name" className="form-label">
                Activity
              </label>
              <select id="activity_name" className="form-select">
                <option>Walking</option>
                <option>use public transport</option>
                <option>Lights off in morning</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Something to said?
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                aria-describedby="description_help"
              />
              <div id="description_help" className="form-text">
                Tell us how do you feel with this achievement!
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Here is the new form under */}
      <div class="card card-outline-secondary">
        <div class="card-header">
          <h3 class="mb-0">User Information</h3>
        </div>
        <div class="card-body">
          <form autocomplete="off" class="form" role="form">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                First name
              </label>
              <div class="col-lg-9">
                <input class="form-control" type="text" value="Jane" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Last name
              </label>
              <div class="col-lg-9">
                <input class="form-control" type="text" value="Bishop" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Email
              </label>
              <div class="col-lg-9">
                <input
                  class="form-control"
                  type="email"
                  value="email@gmail.com"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Company
              </label>
              <div class="col-lg-9">
                <input class="form-control" type="text" value="" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Website
              </label>
              <div class="col-lg-9">
                <input class="form-control" type="url" value="" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Time Zone
              </label>
              <div class="col-lg-9">
                <select class="form-control" id="user_time_zone" size="0">
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">
                    (GMT-08:00) Pacific Time (US &amp; Canada)
                  </option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">
                    (GMT-07:00) Mountain Time (US &amp; Canada)
                  </option>
                  <option
                    selected="selected"
                    value="Central Time (US &amp; Canada)"
                  >
                    (GMT-06:00) Central Time (US &amp; Canada)
                  </option>
                  <option value="Eastern Time (US &amp; Canada)">
                    (GMT-05:00) Eastern Time (US &amp; Canada)
                  </option>
                  <option value="Indiana (East)">
                    (GMT-05:00) Indiana (East)
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Username
              </label>
              <div class="col-lg-9">
                <input class="form-control" type="text" value="janeuser" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Password
              </label>
              <div class="col-lg-9">
                <input
                  class="form-control"
                  type="password"
                  value="11111122333"
                />
                <small class="form-text text-muted" id="passwordHelpBlock">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </small>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label">
                Confirm
              </label>
              <div class="col-lg-9">
                <input
                  class="form-control"
                  type="password"
                  value="11111122333"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label"></label>
              <div class="col-lg-9">
                <input class="btn btn-secondary" type="reset" value="Cancel" />
                <input
                  class="btn btn-primary"
                  type="button"
                  value="Save Changes"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Activity_form;
