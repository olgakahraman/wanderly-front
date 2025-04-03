import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    console.log('Google login clicked');
    setIsAuthenticated(true);
    navigate('/news-feed');
  };

  const loginWithApple = () => {
    console.log('Apple login clicked');
    setIsAuthenticated(true);
    navigate('/news-feed');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/welcome');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginWithGoogle, loginWithApple, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
