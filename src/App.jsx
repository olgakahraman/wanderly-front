import { Route, Routes } from 'react-router-dom';
import NewsFeed from './components/NewsFeed/NewsFeed.jsx';
import WelcomePage from './components/Welcome/WelcomePage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import CreatePost from './pages/CreatePost.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Registration from './pages/Registration.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';

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
