import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import styles from './AuthPage.module.css';

const Login = () => {
  const { loginWithGoogle, loginWithApple } = useAuth();

  return (
    <div className={`container-fluid ${styles.authContainer}`}>
      <div className='row'>
        <motion.div
          className={`col-md-6 ${styles.leftSection}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src='/images/wanderly-2.jpeg'
            alt='Traveling photos'
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={`col-md-6 d-flex flex-column justify-content-center align-items-center ${styles.rightSection}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className={`mb-4 ${styles.heading}`}>Login</h1>
          <button className={styles.oauthButton} onClick={loginWithGoogle}>
            <img
              src='/icons/google.svg'
              alt='Google icon'
              className={styles.icon}
            />
            Continue with Google
          </button>
          <button className={styles.oauthButton} onClick={loginWithApple}>
            <img
              src='/icons/apple.svg'
              alt='Apple icon'
              className={styles.icon}
            />
            Continue with Apple
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
