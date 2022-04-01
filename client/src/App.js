import React from "react";
import "./App.css";
import Click from "./Click";
import Display from "./Display";
import { Routes, Route } from "react-router-dom";
import io from 'socket.io-client'
const socket = io.connect('http://localhost:6969');
// import { UserState } from 'react'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Click socket={socket} />} />
      <Route exact path="/view" element={<Display socket={socket}/>} />
    </Routes>
  );
}

export default App;
