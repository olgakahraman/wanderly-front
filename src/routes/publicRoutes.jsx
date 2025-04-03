import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.jsx'));
const WelcomePage = lazy(() => import('../components/Welcome/WelcomePage.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/welcome', element: <WelcomePage /> },
  { path: '/login', element: <Login /> },
  
];

export default publicRoutes;
