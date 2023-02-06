import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ArrowLeft from '../buttons/ArrowLeft/ArrowLeft';
import Header from '../Header/Header';
import TitleSection from '../TitleSection/TitleSection';

import styles from './RightBreeds.module.scss';
import arrowButtom from '../../assets/icons/arrow-gray-bottom.png';
import sortTop from '../../assets/icons/ab-top.png';
import sortBottom from '../../assets/icons/ab-bottom.png';
import CatsFotoColection from '../CatsFotoColection/CatsFotoColection';
import { setKeyBreed } from '../../redux/slices/oneBreed/slice';

const RightBreeds: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.breeds.data);

  const [selectBreed, setSelectBreed] = React.useState<any>('');

  const handleBreed = (event: any) => {
    setSelectBreed(event);
  };

  React.useEffect(() => {
    dispatch(setKeyBreed(String('beng')));

    const result = data.filter((item: any) => item.name === selectBreed);
    const keyBreed = result.map((key: any) => key.id);
    dispatch(setKeyBreed(String(keyBreed)));
  }, [selectBreed]);

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <section className={styles.header}>
          <Link to='/'>
            <ArrowLeft />
          </Link>
          <TitleSection name='Breeds' />

          <div className={styles.allBreeds}>
            <select
              value={selectBreed}
              onChange={(event) => handleBreed(event.target.value)}
            >
              {data.map((obj: any) => (
                <option key={obj.id}>{obj.name}</option>
              ))}
            </select>
            <img src={arrowButtom} alt='Arrow buttom' />
          </div>

          <div className={styles.limit}>
            <select name='limit' id='limit'>
              <option value='1'>Limit: 5</option>
              <option value='2'>Limit: 10</option>
              <option value='3'>Limit: 15</option>
              <option value='4'>Limit: 20</option>
            </select>
            <img src={arrowButtom} alt='Arrow buttom' />
          </div>

          <button className={styles.sortBtn}>
            <img src={sortTop} alt='Sort top' />
          </button>

          <button className={styles.sortBtn}>
            <img src={sortBottom} alt='Sort bottom' />
          </button>
        </section>
        <div className={styles.fotoColection}>
          <CatsFotoColection />
        </div>
      </main>
    </div>
  );
};

export default RightBreeds;
