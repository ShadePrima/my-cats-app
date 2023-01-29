import React from 'react';

import styles from './Header.module.scss';
import search from '../../assets/icons/search.png';
import like from '../../assets/smiles/like.png';
import heart from '../../assets/smiles/heart.png';
import dislike from '../../assets/smiles/dislike.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInput}>
        <input type='text' placeholder='Search for breeds by name' />
        <div className={styles.buttonInput}>
          <img src={search} alt='Search Icone' />
        </div>
      </div>

      <Link to='/like'>
        <button className={styles.headerButton}>
          <img src={like} alt='Like' />
        </button>
      </Link>
      <Link to='/favourite'>
        <button className={styles.headerButton}>
          <img src={heart} alt='Heart' />
        </button>
      </Link>

      <Link to='/dislike'>
        <button className={styles.headerButton}>
          <img src={dislike} alt='Dislike' />
        </button>
      </Link>
    </header>
  );
};

export default Header;
