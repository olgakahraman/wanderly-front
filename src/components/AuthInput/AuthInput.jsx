import React from 'react';
import styles from './AuthInput.module.css';

const AuthInput = ({ name, type, placeholder }) => {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default AuthInput;
