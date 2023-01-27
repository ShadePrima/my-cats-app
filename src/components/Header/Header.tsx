import React from 'react';

import styles from './Header.module.scss';
import search from '../../assets/icons/search.png';
import like from '../../assets/smiles/like.png';
import heart from '../../assets/smiles/heart.png';
import dislike from '../../assets/smiles/dislike.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInput}>
        <input type='text' placeholder='Search for breeds by name' />
        <div className={styles.buttonInput}>
          <img src={search} alt='Search Icone' />
        </div>
      </div>

      <button className={styles.headerButton}>
        <img src={like} alt='Like' />
      </button>
      <button className={styles.headerButton}>
        <img src={heart} alt='Heart' />
      </button>
      <button className={styles.headerButton}>
        <img src={dislike} alt='Dislike' />
      </button>
    </header>
  );
};

export default Header;
