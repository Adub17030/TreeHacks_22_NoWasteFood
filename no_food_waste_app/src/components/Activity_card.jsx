import React from "react";
import {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card'
import { getUserData } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Activity_card() {
  const [allThePublications, setAllThePublications] = useState([]);

  useEffect(() => {
    //Call firebase to retrieve publications from friends of current user
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user)=> {
      if (user) {
        const theUserData = await getUserData(user);
        //console.log(theUserData)
        if (theUserData){
          setAllThePublications(theUserData.published_assets);
          //console.log("Hey, published assets", publishedAssets);
          //fetchAPI(theUserData.wallets);
        }
        else {
        }
      }
    })
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-8 offset-2">
        <Card border="primary">
        <Card.Body>
          <Card.Title>"friend" has achieved "100" Carbon Score.</Card.Title>
          <Card.Text>
             His most impactful activity was: "Impactful activity".
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
        </div>
      </div>
    </div>
  );
}

export default Activity_card;
