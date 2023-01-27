import React from 'react';

import LeftSection from '../../components/LeftSection/LeftSection';
import RightSection from '../../components/RightSection/RightSection';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
