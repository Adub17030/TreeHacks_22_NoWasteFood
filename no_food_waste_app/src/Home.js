import React, { useEffect, useState } from "react";
import { auth, signInWithGoogle } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header";
import "./Home.css";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getDataCollection } from "./firebase";
import ActivityCarousel from "./components/Activity_carousel";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [userName, setUserName] = useState(0);
  const [avgUserCarbonData, setAvgUserCarbonData] = useState({
    distanceWalked: "",
    distanceByVehicle: "",
    wasteProduced: "",
    naturalLight: "",
    showerTime: "",
    recycled: "",
    diet: "",
  });
  const [lastCarbonDataUpdateDays, setLastCarbonDataUpdateDays] = useState(-1);
  const [dataList, setdataList] = useState([]);
  const navigate = useNavigate();

  const getCurrentUserData = async () => {
    const usersdataRef = doc(getFirestore(), "users", user.uid);
    const docSnap = await getDoc(usersdataRef);
    if (docSnap.exists()) {
      let carbonData = docSnap.data().carbonData;
      let uName = docSnap.data().name;
      setAvgUserCarbonData({
        distanceWalked: Math.round(
          carbonData.reduce(
            (total, next) => Number(total) + Number(next.distanceWalked),
            0
          ) / carbonData.length
        ),
        distanceByVehicle: Math.round(
          carbonData.reduce(
            (total, next) => Number(total) + Number(next.distanceByVehicle),
            0
          ) / carbonData.length
        ),
        wasteProduced: Math.round(
          carbonData.reduce(
            (total, next) => Number(total) + Number(next.wasteProduced),
            0
          ) / carbonData.length
        ),
        naturalLight: Math.round(
          carbonData.reduce(
            (total, next) => Number(total) + Number(next.naturalLight),
            0
          ) / carbonData.length
        ),
        showerTime: Math.round(
          carbonData.reduce(
            (total, next) => Number(total) + Number(next.showerTime),
            0
          ) / carbonData.length
        ),
        recycled: Math.round(
          carbonData.reduce(
            (total, next) => Number(total) + Number(next.recycled),
            0
          ) / carbonData.length
        ),
        diet: carbonData[carbonData.length - 1].diet,
      });

      const currentDate = new Date().getDate();
      const oldDate = new Date(
        carbonData[carbonData.length - 1].dates
      ).getDate();
      setLastCarbonDataUpdateDays(currentDate - oldDate);
      setUserName(uName);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(async () => {
    getCurrentUserData();
    // await setdataList(getDataCollection("users"));
    // console.log(getDataCollection("users"));
    // console.log(dataList);
    if (!user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      <Header user={user} />

      {/* <div className="container">
        <div className="row align-middle">
          <div className="col-12 py-3">
            <div>Welcome back: {userName}</div>
          </div>
        </div>
      </div> */}

      <div class="text-center mt-0 pt-3">
        <div class="card text-center">
          <div class="card-header" style={{ backgroundColor: "#B7EBB7" }}>
            <h2>{userName}'s activity</h2>
          </div>
          <div class="card-body">
            <h5 class="card-title">On average you have...</h5>
            <p class="card-text">
              Walked {avgUserCarbonData.distanceWalked} km
              <br />
              Produced {avgUserCarbonData.wasteProduced} kg of waste
              <br />
              Received {avgUserCarbonData.naturalLight} hours worth of natural
              light <br />
              Spent as low as {avgUserCarbonData.showerTime} minutes during
              shower <br />
              Recycled {avgUserCarbonData.showerTime} kgs worth of waste
              <br />
              {avgUserCarbonData.diet == "vegetarian" && (
                <p>Committed to staying vegetarian</p>
              )}
            </p>
          </div>
          <div
            class="mb-2 card-footer text-muted"
            style={{ backgroundColor: "#B7EBB7" }}
          >
            {lastCarbonDataUpdateDays} days ago
          </div>
        </div>
      </div>
      <ActivityCarousel data={{ list: [] }} />
    </div>
  );
}

export default Home;
