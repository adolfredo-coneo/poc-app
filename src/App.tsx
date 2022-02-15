import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
