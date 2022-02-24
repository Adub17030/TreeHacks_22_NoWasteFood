import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function header(props) {
  const titleFontStyle = {
    fontFamily: 'Kaushan Script, cursive'
  }
  
  return (
    <nav
      class="navbar navbar-light"
      style={{ backgroundColor: "rgb(107, 255, 159)" }}
    >

    <a class="navbar-brand mx-2" href="#">
      <img class="img-fluid rounded-circle d-inline-block" width="40" height="40"
          src={`/images/icons/tree-icon.png`}
          alt=""
      />
      <span class="px-2" style={titleFontStyle} ><b>EcoFriends</b></span>
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
