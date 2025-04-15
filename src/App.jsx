import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Addprofile from './pages/add_profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addprofile" element={<Addprofile />} />
        {/* <Route path="/register" element={<Registrar />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}