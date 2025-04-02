import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import publicRoutes from './routes/publicRoutes.jsx';
import privateRoutes from './routes/privateRoutes.jsx';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route
          path='/create-post'
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/news-feed'
          element={
            <ProtectedRoute>
              <NewsFeed />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
