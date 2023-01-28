import React from 'react';

import styles from './LeftSection.module.scss';
import logo from '../../assets/icons/logo.png';
import voting from '../../assets/menu/voting.png';
import breeds from '../../assets/menu/breeds.png';
import gallery from '../../assets/menu/gallery.png';
import { Link, useLocation } from 'react-router-dom';

const LeftSection: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <Link to='/'>
        <div className={styles.logo}>
          <img src={logo} alt='logo-paw' />
        </div>
      </Link>

      <h1>Hi guest!</h1>

      <h2>Welcome to my cats app</h2>

      <div className={styles.menu}>
        <p className={styles.title}>Lets start using The Cat API</p>
        <div className={styles.items}>
          {location.pathname === '/voting' ? (
            <Link to='#'>
              <div className={styles.item}>
                <img src={voting} alt='Voting' />
                <div className={styles.active}>
                  <p>VOTING</p>
                </div>
              </div>
            </Link>
          ) : (
            <Link to='/voting'>
              <div className={styles.item}>
                <img src={voting} alt='Voting' />
                <div>
                  <p>VOTING</p>
                </div>
              </div>
            </Link>
          )}
          {location.pathname === '/breeds' ? (
            <Link to='#'>
              <div className={styles.item}>
                <img src={breeds} alt='Breeds' />
                <div className={styles.active}>
                  <p>BREEDS</p>
                </div>
              </div>
            </Link>
          ) : (
            <Link to='/breeds'>
              <div className={styles.item}>
                <img src={breeds} alt='Breeds' />
                <div>
                  <p>BREEDS</p>
                </div>
              </div>
            </Link>
          )}
          {location.pathname === '/gallery' ? (
            <Link to='#'>
              <div className={styles.item}>
                <img src={gallery} alt='Gallery' />
                <div className={styles.active}>
                  <p>GALLERY</p>
                </div>
              </div>
            </Link>
          ) : (
            <Link to='/gallery'>
              <div className={styles.item}>
                <img src={gallery} alt='Gallery' />
                <div>
                  <p>GALLERY</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
