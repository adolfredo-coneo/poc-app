import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AuthProvider from './stores/auth/AuthProvider';
import RequireAuth from './stores/auth/RequireAuth';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
