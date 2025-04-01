import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/register" element={<Registrar />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}