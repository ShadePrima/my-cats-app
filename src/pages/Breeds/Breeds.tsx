import React from 'react';
import LeftSection from '../../components/LeftSection/LeftSection';
import RightBreeds from '../../components/RightBreeds/RightBreeds';
import styles from './Breeds.module.scss';

const Breeds: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <LeftSection />
        <RightBreeds />
      </div>
    </div>
  );
};

export default Breeds;
