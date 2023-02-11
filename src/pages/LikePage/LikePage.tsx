import React from 'react';
import { useSelector } from 'react-redux';
import ArrowLeft from '../../components/buttons/ArrowLeft/ArrowLeft';
import Header from '../../components/Header/Header';
import LeftSection from '../../components/LeftSection/LeftSection';
import TitleSection from '../../components/TitleSection/TitleSection';

import styles from './LikePage.module.scss';

const LikePage: React.FC = () => {
  const likes = useSelector((state: any) => state.selected.likes);

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
                <TitleSection name='likes' />
              </div>
            </section>

            <div className={styles.historySection}>
              <div className={styles.historyItems}>
                {likes.map((like: any) => (
                  <div key={like.id} className={styles.historyItem}>
                    <div className={styles.time}>{like.data}</div>
                    <div className={styles.text}>
                      Image ID: <span>{like.id}</span> was added to{' '}
                      <span>{like.section}</span>
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

export default LikePage;
