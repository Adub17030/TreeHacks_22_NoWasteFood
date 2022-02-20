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
import { doc, getDoc  } from "firebase/firestore"; 
import { collection, getDocs, getFirestore } from "firebase/firestore"; 

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [lastUserCarbonData, setLastUserCarbonData] = useState({ distanceWalked: "", distanceByVehicle: "", wasteProduced: "", naturalLight: "", showerTime: "", recycled: "", diet: ""});
  const navigate = useNavigate();

  const [distanceWalked, setDistanceWalked] = useState(0);
  const [distanceByVehicle, setDistanceByVehicle] = useState(0);
  const [wasteProduced, setWasteProduced] = useState(0);
  const [naturalLight, setNaturalLight] = useState(0);
  const [showerTime, setShowerTime] = useState(0);
  const [recycled, setRecycled] = useState(0);
  const [diet, setDiet] = useState("neither");

  const getCurrentUserData =async() => {

    const usersdataRef = doc(getFirestore(), "users", user.uid);
    const docSnap = await getDoc(usersdataRef);
    if (docSnap.exists()) {
      let carbonData = docSnap.data().carbonData
      let lastData = carbonData[carbonData.length - 1]
      setLastUserCarbonData({lastData})
      console.log(lastUserCarbonData)
    }
    else{
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getCurrentUserData()
    if (!user) navigate("/login");
  }, [user, loading]);
  return (
    <div>
      <Navbar className="color-nav" expand="lg">
        <Container>
          <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/activity">Activity Post</Nav.Link>
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
              Walked {lastUserCarbonData.distanceWalked} km<br/>
              Produced {lastUserCarbonData.wasteProduced} kg of waste<br/>
              Received {lastUserCarbonData.naturalLight} hours worth of natural light <br/>
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
