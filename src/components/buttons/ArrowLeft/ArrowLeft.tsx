import React from 'react';
import styles from './ArrowLeft.module.scss';
import arrowLeft from '../../../assets/icons/arrow-left.png';

const ArrowLeft: React.FC = () => {
  return (
    <button className={styles.arrowLeft}>
      <img src={arrowLeft} alt='Arrow Left' />
    </button>
  );
};

export default ArrowLeft;
