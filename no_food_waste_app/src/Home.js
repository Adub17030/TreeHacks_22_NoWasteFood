import React, { useEffect, useState } from "react";
import { auth, logout, signInWithGoogle } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      Home
      <button className="login__btn" onClick={() => logout()}>
        logout
      </button>
    </div>
  );
}

export default Home;
