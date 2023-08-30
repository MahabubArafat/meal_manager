import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import QRScannerComponent from "./components/auth/QRscannerComponent";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes></Routes>
      <div className="container">
        <Routes>
          <Route path="/" element={<h1>Welcome To Meal Manager</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/scan" element={<QRScannerComponent />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
