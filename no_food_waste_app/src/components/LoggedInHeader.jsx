import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { auth, logout, signInWithGoogle } from "../firebase";

function header() {
  return (
    <nav class="navbar navbar-light" style={{backgroundColor : "#4DFF8B"}}>
      <a class="navbar-brand mx-2" href="#">Go Green!</a>
      <form class="form-inline">
        <button class="btn btn-sm btn-outline-success mx-1" type="button" onClick={() => logout()}>Logout</button>
      </form>
  </nav>
  )
}

export default header