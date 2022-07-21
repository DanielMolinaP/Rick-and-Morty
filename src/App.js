import React from "react";
import Landing from "./Componets/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Home from './Componets/Home/Home.jsx'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="home" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
