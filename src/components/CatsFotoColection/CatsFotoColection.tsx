import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CatsFotoColection.module.scss';

// type CatsFotoColectionProps = {
//   data: [];
// };

const CatsFotoColection: React.FC = () => {
  const data = useSelector((state: any) => state.oneBreed.data);

  // if (data) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <div className={styles.root}>
      {data.map((breed: any, index: string) => (
        <img
          key={breed.id}
          id={breed.id}
          src={breed.url}
          alt='foto cat'
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default CatsFotoColection;
