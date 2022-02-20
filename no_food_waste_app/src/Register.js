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
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div className="login">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small class="form-text text-muted" id="passwordHelpBlock">
                Your password must be 6 characters long.
              </small>
            </div>
            {/* <div class="form-group">
              <label for="inputVerify3">Verify</label>
              <input
                class="form-control"
                id="inputVerify3"
                placeholder="Password (again)"
                required=""
                type="password"
              />
            </div> */}
            <div class="form-group">
              <button
                class="btn btn-success btn-lg float-right"
                type="button"
                onClick={() =>
                  registerWithEmailAndPassword(name, email, password)
                }
              >
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
