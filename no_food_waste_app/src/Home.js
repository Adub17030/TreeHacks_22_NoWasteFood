import React, { useEffect, useState } from "react";
import { auth, logout, signInWithGoogle } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LoggedInHeader from "./components/LoggedInHeader";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Home.css";
function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      <Navbar className="color-nav" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/activity">Activity</Nav.Link>
            <Nav.Link href="/AR">AR</Nav.Link>
            <form class="form-inline">
              <button
                class="btn btn-sm btn-outline-success mx-1"
                type="button"
                onClick={() => logout()}
              >
                Logout
              </button>
            </form>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="text-center mt-5">
        <div class="card text-center">
          <div class="card-header" style={{ backgroundColor: "#B7EBB7" }}>
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
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div
            class="card-footer text-muted"
            style={{ backgroundColor: "#B7EBB7" }}
          >
            2 days ago
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
