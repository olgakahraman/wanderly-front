import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.navNavbar}`}>
      <div className='container-fluid'>
        <NavLink
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ''}`
          }
          to='/home'
        >
          Wanderly
        </NavLink>
        <div className='' id='navbarNav'>
          <ul className='navbar-nav d-flex flex-row'>
            {isAuthenticated && (
              <li className='nav-item me-3 auth-link'>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to='/create-post'
                >
                  <i className='fa-solid fa-square-plus d-md-none'></i>
                  <span className='d-none d-md-inline text'>Create a Post</span>
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item me-3 auth-link'>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to='/profile'
                >
                  <i className='fa-solid fa-user d-md-none'></i>
                  <span className={`d-none d-md-inline ${styles.text}`}>
                    Profile
                  </span>
                </NavLink>
              </li>
            )}
            {!isAuthenticated && (
              <li className='nav-item me-3'>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to='/login'
                >
                  <i className='fa-solid fa-right-to-bracket d-md-none'></i>
                  <span className='d-none d-md-inline text'>Login</span>
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item me-3 auth-link'>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to='/logout'
                >
                  <i className='fa-solid fa-right-from-bracket d-md-none'></i>
                  <span className='d-none d-md-inline text'>Logout</span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
