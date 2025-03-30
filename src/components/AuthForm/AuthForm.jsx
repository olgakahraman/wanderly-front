import React from 'react';
import AuthButton from '../AuthButton/AuthButton.jsx';
import AuthInput from '../AuthInput/AuthInput.jsx';
import styles from './AuthForm.module.css';

const AuthForm = ({ type, onSubmit }) => {
  return (
    <form
      className={`d-flex flex-column align-items-center ${styles.form}`}
      onSubmit={onSubmit}
    >
      <div className={styles.formWrapper}>
        {(type === 'login' ||
          type === 'register' ||
          type === 'forgot-password') && (
          <AuthInput name='email' type='email' placeholder='Email' />
        )}

        {(type === 'login' || type === 'register') && (
          <AuthInput name='password' type='password' placeholder='Password' />
        )}

        {type === 'register' && (
          <AuthInput
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
          />
        )}

        <AuthButton type='submit'>
          {type === 'login' && 'Let`s Go'}
          {type === 'register' && 'Start Wandering'}
          {type === 'forgot-password' && 'Reset Password'}
        </AuthButton>
      </div>
    </form>
  );
};

export default AuthForm;
