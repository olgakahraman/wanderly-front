import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';

const ForgotPassword = () => {
  return (
    <div>
      <h1>Password Rescue Mission!</h1>;
      <AuthForm type='forgot-password' />
      <p>
        Remember your password? <Link to='/login'>Jump In</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
