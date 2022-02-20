import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function header() {
  return (
    <nav
      class="navbar navbar-light"
      style={{ backgroundColor: "rgb(107, 255, 159)" }}
    >
      <a class="navbar-brand mx-2" href="#">
        EcoFriends
      </a>
      <form class="form-inline">
        <a href="/login">
          <button class="btn btn-sm btn-outline-success mx-1" type="button">
            Login
          </button>
        </a>
        <a href="/register">
          <button class="btn btn-sm btn-outline-success mx-2" type="button">
            Sign up
          </button>
        </a>
      </form>
    </nav>
  );
}

export default header;
