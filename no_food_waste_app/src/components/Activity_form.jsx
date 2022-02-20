import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Activity_form() {
  const user = auth.currentUser;
  const [userName, setUserName] = useState(0);
  const date = new Date();
  const navigate = useNavigate();
  toast.configure();
  const [distanceWalked, setDistanceWalked] = useState(0);
  const [distanceByVehicle, setDistanceByVehicle] = useState(0);
  const [vehicle, setVehicle] = useState("car");
  const [wasteProduced, setWasteProduced] = useState(0);
  const [naturalLight, setNaturalLight] = useState(0);
  const [showerTime, setShowerTime] = useState(0);
  const [recycled, setRecycled] = useState(0);
  const [diet, setDiet] = useState("neither");

  //Function tu publish your activity
  const publishActivity = async (e) => {
    e.preventDefault();

    // Search for document in users of the current user.
    const usersdataRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(usersdataRef);
    let uName = docSnap.data().name;
    setUserName(uName);

    updateDoc(
      usersdataRef,
      {
        carbonData: arrayUnion({
          userName: uName,
          vehicle: vehicle,
          timestamp: Date.now(),
          distanceWalked: distanceWalked,
          distanceByVehicle: distanceByVehicle,
          wasteProduced: wasteProduced,
          naturalLight: naturalLight,
          showerTime: showerTime,
          recycled: recycled,
          diet: diet,
          dates: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`,
        }),
      },
      {
        merge: true,
      }
    )
      .then(() => {
        // Clean the form and send confirmation message

        setDistanceWalked(0);
        setDistanceByVehicle(0);
        setWasteProduced(0);
        setNaturalLight(0);
        setShowerTime(0);
        setRecycled(0);
        setDiet("neither");
        setVehicle("car");

        //Imprimo los documentos de esa coleccion ::::
        //const datos = getDataCollection("collections");
        //console.log(datos);
        //addCurrentAsset(null);

        toast.success("Asset published successfully! Redirecting to home...", {
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
      })
      .then(() => {
        //Reloading page
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);

        toast.error(
          "Something went wrong when we tried to publish your asset. Please check everything and try again",
          {
            autoClose: 8000,
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
          }
        );
      });
  };

  return (
    <div className="container mt-2">
      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className="mb-0 text-center">How far did you go today?</h3>
        </div>
        <div className="card-body">
          <form
            autoComplete="off"
            className="form"
            role="form"
            onSubmit={publishActivity}
          >
            {/* <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                What did you do?
              </label>
              <div className="col-lg-9">
                <select className="form-control" id="user_time_zone" size="0">
                  <option value="Hawaii">Take public transport</option>
                  <option value="Alaska">Walk 5km</option>
                  <option value="Pacific Time (US &amp; Canada)">
                    Walk 10km
                  </option>
                </select>
              </div>
            </div> */}
            <div className="form-group row ">
              <label className="col-lg-3 col-form-label form-control-label">
                Enter distance walked:
              </label>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Kilometer"
                  step={0.1}
                  min={0}
                  onInput="validity.valid||(value='');"
                  onChange={(event) => {
                    setDistanceWalked(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Enter distance traveled by vehicle:
              </label>
              <div className="col-lg-9">
                <select
                  className="form-control"
                  id="user_time_zone"
                  size="0"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setVehicle(event.target.value);
                  }}
                >
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                  <option value="scooter">Scooter</option>
                </select>
              </div>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Kilometer"
                  step={0.1}
                  min={0}
                  onInput="validity.valid||(value='');"
                  onChange={(event) => {
                    setDistanceByVehicle(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Enter amount of waste produced:
              </label>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Pounds"
                  step={0.1}
                  min={0}
                  onInput="validity.valid||(value='');"
                  onChange={(event) => {
                    setWasteProduced(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Enter amount of window light over room light:
              </label>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Hours"
                  step={0.1}
                  min={0}
                  onInput="validity.valid||(value='');"
                  onChange={(event) => {
                    setNaturalLight(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                How long was your shower?
              </label>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Minutes"
                  step={0.1}
                  min={0}
                  onInput="validity.valid||(value='');"
                  onChange={(event) => {
                    setShowerTime(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Enter amount of waste recycled
              </label>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Pounds"
                  step={1}
                  min={0}
                  onInput="validity.valid||(value='');"
                  onChange={(event) => {
                    setRecycled(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Vegetarian/Vegan for the day?
              </label>
              <div className="col-lg-9">
                <select
                  className="form-control"
                  id="user_time_zone"
                  size="0"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setDiet(event.target.value);
                  }}
                >
                  <option value="neither">Neither</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label"></label>
              <div className="col-lg-9">
                <input
                  className="btn btn-secondary"
                  type="reset"
                  value="Cancel"
                />
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Activity_form;
