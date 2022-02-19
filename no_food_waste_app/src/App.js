import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
