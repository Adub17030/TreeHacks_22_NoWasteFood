import React, { useEffect, useState } from "react";
import { auth, logout, signInWithGoogle } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LoggedInHeader from "./components/LoggedInHeader";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      <LoggedInHeader />
      
      <div class="text-center mt-5">
        
        <div class="card text-center">
          <div class="card-header" style={{backgroundColor : "#B7EBB7"}}>
          <h2>My activity</h2>
          </div>
          <div class="card-body">
            <h5 class="card-title">On average you have</h5>
            <p class="card-text">
              <ul>
                <li>one</li>
                <li>two</li>
              </ul>
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted" style={{backgroundColor : "#B7EBB7"}}>
            2 days ago
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
