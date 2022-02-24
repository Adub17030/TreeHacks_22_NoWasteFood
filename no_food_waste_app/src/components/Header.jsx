import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";

function Header(props) {
  const navigate = useNavigate();
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

    {props.user &&
    <div>
    <button
      class="btn btn-sm btn-outline-success mx-1"
      type="button"
      onClick={() => navigate("/home")}
    >
      Home
    </button>
    <button
      class="btn btn-sm btn-outline-success mx-1"
      type="button"
      onClick={() => navigate("/activity")}
    >
      Activity Post
    </button>
    <button
      class="btn btn-sm btn-outline-success mx-1"
      type="button"
      onClick={() => navigate("/ar")}
    >
      AR Connect
    </button>
    <button
      class="btn btn-sm btn-outline-success mx-1"
      type="button"
      onClick={() => logout()}
    >
      Logout
    </button>
    </div>
    }

      {!props.user && <form class="form-inline">
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
      </form>}


    </nav>
  );
}

export default Header;
