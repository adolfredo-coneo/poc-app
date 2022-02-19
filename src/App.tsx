import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

import { useAuth } from './stores/auth/AuthProvider';
import RequireAuth from './stores/auth/RequireAuth';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import { getToken } from './stores/auth/LocalStorage';
import { User } from './models/User';

const queryClient = new QueryClient();

function App() {
  const [token] = useState<User | null>(getToken());
  const { signin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      signin(token, () => {
        navigate('/dashboard', { replace: true });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <FavoritesPage />
            </RequireAuth>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
