import React from 'react';

import styles from './LeftSection.module.scss';
import logo from '../../assets/icons/logo.png';
import voting from '../../assets/menu/voting.png';
import breeds from '../../assets/menu/breeds.png';
import gallery from '../../assets/menu/gallery.png';

const LeftSection: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={logo} alt='logo-paw' />
      </div>

      <h1>Hi guest!</h1>

      <h2>Welcome to my cats app</h2>

      <div className={styles.menu}>
        <p className={styles.title}>Lets start using The Cat API</p>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={voting} alt='Voting' />
            <div>
              <p>VOTING</p>
            </div>
          </div>

          <div className={styles.item}>
            <img src={breeds} alt='Breeds' />
            <div>
              <p>BREEDS</p>
            </div>
          </div>

          <div className={styles.item}>
            <img src={gallery} alt='Gallery' />
            <div>
              <p>GALLERY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
