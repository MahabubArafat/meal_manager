import React from "react";
import { Routes, Route } from "react-router-dom";
import QRScannerComponent from "./components/QRscannerComponent";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/scan" element={<QRScannerComponent />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
