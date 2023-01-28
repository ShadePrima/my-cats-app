import React from 'react';

import styles from './CatsFotoColection.module.scss';
import first from '../../assets/foto/1.jpg';
import second from '../../assets/foto/2.jpg';
import third from '../../assets/foto/3.jpg';
import fourth from '../../assets/foto/4.jpg';
import fifth from '../../assets/foto/5.jpg';

const CatsFotoColection: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <img src={first} alt='first' className={styles.first} />
        <img src={second} alt='second' className={styles.second} />
        <img src={third} alt='third' className={styles.third} />
      </div>
      <div className={styles.row}>
        <img src={fourth} alt='fourth' className={styles.fourth} />
        <img src={fifth} alt='fifth' className={styles.fifth} />
      </div>

      <div className={styles.item}>
        <div className={styles.row}>
          <img src={first} alt='first' className={styles.first} />
          <img src={second} alt='second' className={styles.second} />
          <img src={third} alt='third' className={styles.third} />
        </div>
        <div className={styles.row}>
          <img src={fourth} alt='fourth' className={styles.fourth} />
          <img src={fifth} alt='fifth' className={styles.fifth} />
        </div>
      </div>
    </div>
  );
};

export default CatsFotoColection;
