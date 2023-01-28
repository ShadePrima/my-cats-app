import React from 'react';
import { Link } from 'react-router-dom';

import ArrowLeft from '../buttons/ArrowLeft/ArrowLeft';
import Header from '../Header/Header';
import TitleSection from '../TitleSection/TitleSection';

import styles from './RightBreeds.module.scss';
import arrowButtom from '../../assets/icons/arrow-gray-bottom.png';
import sortTop from '../../assets/icons/ab-top.png';
import sortBottom from '../../assets/icons/ab-bottom.png';

const RightBreeds: React.FC = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <section className={styles.header}>
          <Link to='/'>
            <ArrowLeft />
          </Link>
          <TitleSection name='Breeds' />

          <div className={styles.allBreeds}>
            <select>
              <option>All breeds</option>
              <option>Abyssinian</option>
              <option>Aegean</option>
              <option>American Bobtail</option>
              <option>American Curl</option>
              <option>American Shorthair</option>
              <option>American Wirehair</option>
            </select>
            <img src={arrowButtom} alt='Arrow buttom' />
          </div>

          <div className={styles.limit}>
            <select name='limit' id='limit'>
              <option value='1'>Limit: 5</option>
              <option value='2'>Limit: 10</option>
              <option value='3'>Limit: 15</option>
              <option value='4'>Limit: 20</option>
            </select>
            <img src={arrowButtom} alt='Arrow buttom' />
          </div>

          <button className={styles.sortBtn}>
            <img src={sortTop} alt='Sort top' />
          </button>

          <button className={styles.sortBtn}>
            <img src={sortBottom} alt='Sort bottom' />
          </button>
        </section>
      </main>
    </div>
  );
};

export default RightBreeds;
