import React from 'react';
import Header from '../Header/Header';
import styles from './RightGallery.module.scss';

const RightGallery: React.FC = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}></main>
    </div>
  );
};

export default RightGallery;
