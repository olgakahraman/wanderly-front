import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthForm from '../components/AuthForm/AuthForm.jsx';
import styles from './AuthPage.module.css';

const ForgotPassword = () => {
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
            alt='Traveling inspiration'
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={`col-md-6 d-flex flex-column justify-content-center align-items-center ${styles.rightSection}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className={`mb-4 ${styles.heading}`}>Password Rescue Mission!</h1>
          <AuthForm type='forgot-password' />
          <p className={styles.link}>
            Remember your password? <Link to='/login'>Jump In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
