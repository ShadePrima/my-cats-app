import React from 'react';

import ArrowLeft from '../../components/buttons/ArrowLeft/ArrowLeft';
import CatsFotoColection from '../../components/CatsFotoColection/CatsFotoColection';
import Header from '../../components/Header/Header';
import LeftSection from '../../components/LeftSection/LeftSection';
import TitleSection from '../../components/TitleSection/TitleSection';

import styles from './Dislike.module.scss';

const Dislike: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <LeftSection />

        <div className={styles.rightSection}>
          <section className={styles.header}>
            <Header />
          </section>

          <div className={styles.main}>
            <section className={styles.favourites}>
              <div className={styles.buttonTop}>
                <ArrowLeft />
                <TitleSection name='dislikes' />
              </div>
            </section>

            <div className={styles.fotos}>
              <CatsFotoColection />
            </div>

            <div className={styles.historySection}>
              <div className={styles.historyItems}>
                <div className={styles.historyItem}>
                  <div className={styles.time}>22:35</div>
                  <div className={styles.text}>
                    Image ID: <span>fQSunHvl8</span> was added to Favourites
                  </div>
                </div>
                <div className={styles.historyItem}>
                  <div className={styles.time}>22:35</div>
                  <div className={styles.text}>
                    Image ID: <span>fQSunHvl8</span> was added to Favourites
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dislike;
