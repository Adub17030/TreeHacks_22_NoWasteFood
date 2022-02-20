import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from './components/Header';
import PostBehaviour from "./pages/PostBehaviour";

export default function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<PostBehaviour />} />
        </Routes>
      </BrowserRouter>
      {//<Footer />
}
    </div>
  );
}