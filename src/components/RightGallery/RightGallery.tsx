import React from 'react';
import { Link } from 'react-router-dom';

import ArrowLeft from '../buttons/ArrowLeft/ArrowLeft';
import Header from '../Header/Header';
import TitleSection from '../TitleSection/TitleSection';

import styles from './RightGallery.module.scss';
import upload from '../../assets/icons/upload.png';
import arrowButtom from '../../assets/icons/arrow-gray-bottom.png';
import update from '../../assets/icons/update.png';
import CatsFotoColection from '../CatsFotoColection/CatsFotoColection';

const orderList = ['Random', 'Desc', 'Asc'];

const typeList = ['All', 'Static', 'Animated'];

const breedsList = [
  'None',
  'Abyssinian',
  'Bengal',
  'Agean',
  'American Bobtail',
  'American Shorthair',
  'American Wirehair',
  '...',
];

const limitList = [
  '5 items per page',
  '10 items per page',
  '15 items per page',
  '20 items per page',
];

const RightGallery: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        <section className={styles.top}>
          <Link to='/'>
            <ArrowLeft />
          </Link>
          <div className={styles.galleryTitle}>
            <TitleSection name='Gallery' />
          </div>

          <button className={styles.upload}>
            <img src={upload} alt='upload' />
            upload
          </button>
        </section>

        <section className={styles.filters}>
          <div className={styles.row}>
            <div className={styles.filterItem}>
              <label className={styles.label}>order</label>
              <div className={styles.selected}>
                <select>
                  {orderList.map((order, index) => (
                    <option key={index}>{order}</option>
                  ))}
                </select>
                <img src={arrowButtom} alt='Arrow buttom' />
              </div>
            </div>
            <div className={styles.filterItem}>
              <label className={styles.label}>type</label>
              <div className={styles.selected}>
                <select>
                  {typeList.map((type, index) => (
                    <option key={index}>{type}</option>
                  ))}
                </select>
                <img src={arrowButtom} alt='Arrow buttom' />
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.filterItem}>
              <label className={styles.label}>Breed</label>
              <div className={styles.selected}>
                <select>
                  {breedsList.map((breed, index) => (
                    <option key={index}>{breed}</option>
                  ))}
                </select>
                <img src={arrowButtom} alt='Arrow buttom' />
              </div>
            </div>

            <div className={styles.filterItemLast}>
              <label className={styles.label}>Limit</label>
              <div className={styles.selectedLast}>
                <select>
                  {limitList.map((limit, index) => (
                    <option key={index}>{limit}</option>
                  ))}
                </select>
                <img src={arrowButtom} alt='Arrow buttom' />
              </div>
            </div>

            <button className={styles.update}>
              <img src={update} alt='update' />
            </button>
          </div>
        </section>

        <section className={styles.foto}>
          <CatsFotoColection />
        </section>
      </main>
    </div>
  );
};

export default RightGallery;
