import React, { useEffect, useState } from "react";
import ActivityForm from "../components/Activity_form";
import { auth, logout } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function Post_behaviour() {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      <Navbar className="color-nav" expand="xxl">
        <Container>
          <Navbar.Brand href="/home">App Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
              </button>{" "}
              <button
                class="btn btn-sm btn-outline-success mx-1"
                type="button"
                onClick={() => logout()}
              >
                Logout
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
