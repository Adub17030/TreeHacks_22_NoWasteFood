import React, { useEffect, useState } from "react";
import "./Welcome.css";
import CSSTransition from 'react-transition-group';
// import LandingText from "../LandingText/LandingText.js";
// import LandingPhoto from "../LandingPhoto/LandingPhoto";
// import Navbar from './Components/Navbar/Navbar';
// import { ReactNavbar } from "react-responsive-animate-navbar";
import Header from "./components/Header";
import Fade from 'react-bootstrap/Fade'
import { motion } from "framer-motion"

const Home = () => {
  const [open, setOpen] = useState(false);

   useEffect(() => {
    setOpen(true)
  });

  return (
    <div>
      <Header />


      <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2, type: "tween" }}
  >
    <div className="intro-logo jumbo-bg">
          <h1>Welcome to EcoFriends</h1>
        </div>
  </motion.div>
        
      <style jsx>{`
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
          font-size: 1.8em;
          font-weight: 900;
          font-family: "Philosopher", sans-serif;
          color: var(--brand-color);
        }
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: var(--gray-color-1);
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: var(--brand-color);
          border: 1.8px solid var(--brand-color);
          background: white;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: var(--brand-color);
          color: white;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: var(--brand-color);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Home;
