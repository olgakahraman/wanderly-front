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
      <Suspense fallback={<div className='loading'>Loading...</div>}>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {privateRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
