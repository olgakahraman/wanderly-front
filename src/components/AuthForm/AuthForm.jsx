import React from 'react';
import AuthInput from '../AuthInput/AuthInput.jsx'
import AuthButton from '../AuthButton/AuthButton.jsx';
import styles from './AuthForm.module.css'

const AuthForm = ({ type }) => {
  return (
    <form className={styles.form}>
      {type !== 'forgot-password' && (
        <AuthInput name='email' type='email' placeholder='Email' />
      )}
      {type === 'login' && (
        <AuthInput name='password' type='password' placeholder='Password' />
      )}
      {type === 'register' && (
        <>
          <AuthInput name='password' type='password' placeholder='Password' />
          <AuthInput
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
          />
        </>
      )}

      <AuthButton>
        {type === 'login' && 'Let`s Go'}
        {type === 'register' && 'Start Wandering'}
        {type === 'forgot-password' && 'Reset Password'}
      </AuthButton>
    </form>
  );
};

export default AuthForm;
