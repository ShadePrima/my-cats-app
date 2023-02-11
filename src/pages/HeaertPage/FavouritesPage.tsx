import React from 'react';
import { useSelector } from 'react-redux';
import ArrowLeft from '../../components/buttons/ArrowLeft/ArrowLeft';
import CatsFotoColection from '../../components/CatsFotoColection/CatsFotoColection';
import Header from '../../components/Header/Header';
import LeftSection from '../../components/LeftSection/LeftSection';
import TitleSection from '../../components/TitleSection/TitleSection';

import styles from './FavouritesPage.module.scss';

const FavouritesPage: React.FC = () => {
  const favourites = useSelector((state: any) => state.selected.favourites);
  console.log(favourites, 'favouritesPage');

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
                <TitleSection name='favourites' />
              </div>
            </section>

            <div className={styles.historySection}>
              <div className={styles.historyItems}>
                {favourites.map((item: any) => (
                  <div key={item.id} className={styles.historyItem}>
                    <div className={styles.time}>{item.data}</div>
                    <div className={styles.text}>
                      Image ID: <span>{item.id}</span> was added to{' '}
                      <span>{item.section}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
