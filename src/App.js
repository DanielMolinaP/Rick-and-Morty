import React from "react";
import Landing from "./Componets/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Home from './Componets/Home/Home.jsx'
import CharacterDetail from "./Componets/CharacterDetail/CharacterDetail";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="home" element={<Home />} />
      <Route path="/home/characterDetail" element={<CharacterDetail />} />
    </Routes>
    </>
  );
}

export default App;
