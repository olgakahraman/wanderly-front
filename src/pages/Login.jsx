import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate('/news-feed');
  };

  return (
    <div>
      <h1>Ready to blaze new trails?</h1>
      <h3>Unlock Adventures</h3>
      <AuthForm type='login' />
      <p>
        Don't you have an account? <Link to='/registration'>Create</Link>
      </p>
      <p>
        <Link to='/forgot-password'>Forgot password?</Link>
      </p>
    </div>
  );
};

export default Login;
