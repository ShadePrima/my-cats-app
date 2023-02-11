import React from 'react';
import { useSelector } from 'react-redux';

import ArrowLeft from '../../components/buttons/ArrowLeft/ArrowLeft';
import Header from '../../components/Header/Header';
import LeftSection from '../../components/LeftSection/LeftSection';
import TitleSection from '../../components/TitleSection/TitleSection';

import styles from './Dislike.module.scss';

const Dislike: React.FC = () => {
  const dislikes = useSelector((state: any) => state.selected.dislikes);

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

            <div className={styles.historySection}>
              <div className={styles.historyItems}>
                {dislikes.map((dislike: any) => (
                  <div key={dislike.id} className={styles.historyItem}>
                    <div className={styles.time}>{dislike.data}</div>
                    <div className={styles.text}>
                      Image ID: <span>{dislike.id}</span> was added to{' '}
                      <span>{dislike.section}</span>
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

export default Dislike;
