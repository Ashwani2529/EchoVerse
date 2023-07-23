import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Home/Homepage';
import Room from './components/Room/Room';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/room/:roomID" element={<Room />} />
    </Routes>
  );
}

export default App;
