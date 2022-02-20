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
    </div>
  );
}

export default Activity_form;
