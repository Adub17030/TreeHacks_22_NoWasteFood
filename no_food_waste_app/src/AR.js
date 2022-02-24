import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logout,
  logInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "./components/Header";

import "./AR.css";
import Modal from "react-bootstrap/Modal";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connect With Me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="img"
          src="https://media.nbcbayarea.com/2020/10/qr-code-huge.png?resize=906,1024"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function AR() {
  const [user, loading, error] = useAuthState(auth);
  const [modalShow, setModalShow] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      <Header user={user} />

      <Container className="box">
        <Button
          className="abc"
          variant="success"
          size="lg"
          onClick={() => setModalShow(true)}
        >
          Connect
        </Button>{" "}
        <a href={"https://adi-ar.netlify.app/"}> Connect with AR</a>{" "}
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AR;
