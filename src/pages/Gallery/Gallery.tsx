import React from 'react';
import LeftSection from '../../components/LeftSection/LeftSection';
import RightGallery from '../../components/RightGallery/RightGallery';
import styles from './Gallery.module.scss';

const Gallery: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <LeftSection />
        <RightGallery />
      </div>
    </div>
  );
};

export default Gallery;
