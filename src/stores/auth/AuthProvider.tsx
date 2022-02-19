import React, { createContext, useContext, useState } from 'react';

import { User } from '../../models/User';
import { AuthContextType } from '../../types/AuthContext';
import { removeToken, setToken } from '../LocalStorage';

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signin = (user: User, callback: VoidFunction) => {
    setUser(user);
    setToken(user);
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
    removeToken();
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default AuthProvider;
