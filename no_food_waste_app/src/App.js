import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Welcome from "./Welcome";
import PostBehaviour from "./pages/PostBehaviour";
import ActivityCard from "./components/ActivityCard";
import AR from "./AR";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<PostBehaviour />} />
          <Route path="/ar" element={<AR />} />
          <Route path="/card" element={<ActivityCard />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
      {
        //<Footer />
      }
    </div>
  );
}
