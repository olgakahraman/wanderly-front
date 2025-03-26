import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from './WelcomePage.module.css';

function WelcomePage() {
  return (
    <main className={styles.hero}>
      <div className={`container-fluid ${styles.container}`}>
        <div className='row'>
          <div
            className={`col-md-5 d-flex flex-column justify-content-center align-items-center ${styles.leftSection}`}
          >
            <h1 className={styles.heading}>Wanderly</h1>
            <h3 className={styles.subHeading}>
              A social network for travel lovers.
            </h3>
            <button
              className={styles.button}
              aria-label='Get started with Wanderly'
            >
              Get Started
            </button>
          </div>
          <div className={`col-md-7 ${styles.rightSection}`}>
            <img
              src='/images/wanderly-2.jpeg'
              alt='Traveling photos'
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default WelcomePage;
