import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';

const Registration = () => {
  return (
    <div>
      <h1>Create Account</h1>
      <h3>Join the Tribe</h3>
      <AuthForm type='register' />
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default Registration;
