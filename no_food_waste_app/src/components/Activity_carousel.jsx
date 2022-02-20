import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getDataCollection } from "../firebase";
import { auth, logout, signInWithGoogle } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import ActivityCard from "./ActivityCard";
function ActivityCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
  const makeDataList = (res) => {
    setdataList(res);
    // console.log(res);
    // console.log(dataList);
  };
  useEffect(async () => {
    getCurrentUserData();
    const res = await getDataCollection("users");
    makeDataList(res);
    if (!user) navigate("/");
  }, [user, loading]);

  const listItems = dataList.map((element) => <ActivityCard data={element} />);

  return (
    <div className="cSol">
      <Carousel
        centerMode={true}
        responsive={responsive}
        infinite={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // draggable={true}
        swipeable={true}
        autoPlay={false}
        // showDots={true}
        // itemClass="carousel-item-padding-40-px"
      >
        {listItems}
      </Carousel>
    </div>
  );
}

export default ActivityCarousel;
