import React from 'react';

import styles from './RightSection.module.scss';
import background from '../../assets/menu/right-background.png';
import girlAndPet from '../../assets/menu/girl-and-pet.png';

const RightSection: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={background} alt='Background' className={styles.background} />
      <img src={girlAndPet} alt='GirlAndPet' className={styles.girlAndPet} />
    </div>
  );
};

export default RightSection;
