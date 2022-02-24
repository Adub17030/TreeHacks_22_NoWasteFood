import React, { useEffect, useState } from "react";
import ActivityForm from "../components/Activity_form";
import { auth, logout } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../components/Header";

function Post_behaviour() {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      <Header user={user} />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">
              Share with your circle the sustainable behaviour you have today!
            </h3>
          </div>
        </div>
      </div>

      <ActivityForm />
    </div>
  );
}

export default Post_behaviour;
