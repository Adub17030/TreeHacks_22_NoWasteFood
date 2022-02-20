import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function header() {
  return (
    <nav class="navbar navbar-light" style={{backgroundColor : "#4DFF8B"}}>
      <a class="navbar-brand mx-2" href="#">Go Green!</a>
      <form class="form-inline">
        <a href="/login"><button class="btn btn-sm btn-outline-success mx-1" type="button">Login</button></a>
        <button class="btn btn-sm btn-outline-success mx-2" type="button">Sign up</button>
      </form>
  </nav>
  )
}

export default header