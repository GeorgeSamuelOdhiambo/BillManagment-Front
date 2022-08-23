import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/LoginRegisterResetpassword/Login";
import Register from "./Components/LoginRegisterResetpassword/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
