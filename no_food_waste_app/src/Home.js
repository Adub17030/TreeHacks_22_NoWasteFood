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
  const [avgUserCarbonData, setAvgUserCarbonData] = useState({ distanceWalked: "", distanceByVehicle: "", wasteProduced: "", naturalLight: "", showerTime: "", recycled: "", diet: ""});
  const [lastCarbonDataUpdateDays, setLastCarbonDataUpdateDays] = useState(-1);
  const navigate = useNavigate();

  const getCurrentUserData =async() => {
    const usersdataRef = doc(getFirestore(), "users", user.uid);
    const docSnap = await getDoc(usersdataRef);
    if (docSnap.exists()) {
      let carbonData = docSnap.data().carbonData
      setAvgUserCarbonData({distanceWalked : (carbonData.reduce((total, next) => Number(total) + Number(next.distanceWalked), 0)) / carbonData.length ,
        distanceByVehicle :  Math.round((carbonData.reduce((total, next) => Number(total) + Number(next.distanceByVehicle), 0)) / carbonData.length),
        wasteProduced : Math.round((carbonData.reduce((total, next) => Number(total) + Number(next.wasteProduced), 0)) / carbonData.length),
        naturalLight :  Math.round((carbonData.reduce((total, next) => Number(total) + Number(next.naturalLight), 0)) / carbonData.length),
        showerTime :  Math.round((carbonData.reduce((total, next) => Number(total) + Number(next.showerTime), 0)) / carbonData.length),
        recycled :  Math.round((carbonData.reduce((total, next) => Number(total) + Number(next.recycled), 0)) / carbonData.length),
        diet : carbonData[carbonData.length - 1].diet
      })

      const currentDate = new Date().getDate()
      const oldDate = new Date(carbonData[carbonData.length - 1].dates).getDate()
      setLastCarbonDataUpdateDays(currentDate - oldDate)
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

      <div class="text-center mt-5">
        <div class="card text-center">
          <div class="card-header" style={{ backgroundColor: "#B7EBB7" }}>
            <h2>My activity</h2>
          </div>
          <div class="card-body">
            <h5 class="card-title">On average you have..</h5>
            <p class="card-text">
              Walked {avgUserCarbonData.distanceWalked} km<br/>
              Produced {avgUserCarbonData.wasteProduced} kg of waste<br/>
              Received {avgUserCarbonData.naturalLight} hours worth of natural light <br/>
              Spent as low as {avgUserCarbonData.showerTime} minutes during shower <br/>
              Recycled {avgUserCarbonData.showerTime} kgs worth of waste<br/>
              { avgUserCarbonData.diet == 'vegetarian' && <p>Committed to staying vegetarian</p> }
            </p>

          </div>
          <div
            class="card-footer text-muted"
            style={{ backgroundColor: "#B7EBB7" }}
          >
            {lastCarbonDataUpdateDays} days ago
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
