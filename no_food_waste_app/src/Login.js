import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
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
      <div class="card card-outline-secondary">
        <div class="card-header">
          <h3 class="mb-0">Login</h3>
        </div>
        <div class="card-body">
          <form
            autocomplete="off"
            class="form"
            id="formLogin"
            name="formLogin"
            role="form"
          >
            <div class="form-group">
              <label for="uname1">Username</label>
              <input
                class="form-control"
                id="uname1"
                name="uname1"
                required=""
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                autocomplete="new-password"
                class="form-control"
                id="pwd1"
                required=""
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-check small">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" />
                <span>Remember me on this device</span>
              </label>
            </div>
            <button
              class="btn btn-success btn-lg float-right"
              type="button"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
