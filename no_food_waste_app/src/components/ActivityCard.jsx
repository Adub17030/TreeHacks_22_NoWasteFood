import React from "react";
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
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardFooter,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getDataCollection } from "../firebase";
import { auth, logout, signInWithGoogle } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import "./ActivityCarousel.css";

function ActivityCard(props) {
  return (
    <MDBCard className="card" style={{ width: "15rem" }}>
      <MDBCardImage
        position="top"
        alt="..."
        src="https://mdbootstrap.com/img/new/standard/city/062.webp"
      />
      <MDBCardBody>
        <MDBCardTitle>{props.data.userName}</MDBCardTitle>
        <MDBCardText>The date: {props.data.dates}</MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>
          Walked {props.data.distanceWalked}km. He just go to some cool places.
        </MDBListGroupItem>
        <MDBListGroupItem>
          Recycled {props.data.recycled}kg worth of waste. Nice!
        </MDBListGroupItem>
        <MDBListGroupItem>
          Benefit {props.data.naturalLight} hours of natural light. Got some
          vitamin D.
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
  );
}

export default ActivityCard;
