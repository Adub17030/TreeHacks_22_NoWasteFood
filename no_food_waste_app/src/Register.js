import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => registerWithEmailAndPassword(name, email, password)}
        >
          Register
        </button>
        {/* <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button> */}
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div> */}
      </div>
      <div class="card card-outline-secondary">
        <div class="card-header">
          <h3 class="mb-0">Sign Up</h3>
        </div>
        <div class="card-body">
          <form autocomplete="off" class="form" role="form">
            <div class="form-group">
              <label for="inputName">Name</label>
              <input
                class="form-control"
                id="inputName"
                placeholder="Full name"
                type="text"
              />
            </div>
            <div class="form-group">
              <label for="inputEmail3">Email</label>
              <input
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
                required=""
                type="email"
              />
            </div>
            <div class="form-group">
              <label for="inputPassword3">Password</label>
              <input
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
                required=""
                type="password"
              />
              <small class="form-text text-muted" id="passwordHelpBlock">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </small>
            </div>
            <div class="form-group">
              <label for="inputVerify3">Verify</label>
              <input
                class="form-control"
                id="inputVerify3"
                placeholder="Password (again)"
                required=""
                type="password"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-success btn-lg float-right" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
