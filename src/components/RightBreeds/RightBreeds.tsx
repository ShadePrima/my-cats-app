import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ArrowLeft from '../buttons/ArrowLeft/ArrowLeft';
import Header from '../Header/Header';
import TitleSection from '../TitleSection/TitleSection';

import styles from './RightBreeds.module.scss';
import arrowButtom from '../../assets/icons/arrow-gray-bottom.png';
import sortTop from '../../assets/icons/ab-top.png';
import sortTopRed from '../../assets/icons/ab-top-red.png';
import sortBottom from '../../assets/icons/ab-bottom.png';
import sortBottomRed from '../../assets/icons/ab-bottom-red.png';

import CatsFotoColection from '../CatsFotoColection/CatsFotoColection';
import {
  setKeyBreed,
  setLimit,
  setOrderAsc,
  setOrderDesc,
} from '../../redux/slices/oneBreed/slice';

const RightBreeds: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.breeds.data);

  const [selectBreed, setSelectBreed] = React.useState<any>('');
  const [selectLimit, setSelectLimit] = React.useState<string>('5');

  const activeButtonAsc = React.useRef(false);
  const activeButtonDesc = React.useRef(false);

  React.useEffect(() => {
    dispatch(setLimit(selectLimit));
  }, [selectLimit, dispatch]);

  const handleBreed = (event: any) => {
    setSelectBreed(event);
  };

  React.useEffect(() => {
    dispatch(setKeyBreed(String('beng')));

    const result = data.filter((item: any) => item.name === selectBreed);
    const keyBreed = result.map((key: any) => key.id);
    dispatch(setKeyBreed(String(keyBreed)));
  }, [selectBreed]);

  const handlOrderAsc = () => {
    dispatch(setOrderAsc('ASC'));
    activeButtonAsc.current = true;
    activeButtonDesc.current = false;
  };

  const handlOrderDesc = () => {
    dispatch(setOrderDesc('DESC'));
    activeButtonAsc.current = false;
    activeButtonDesc.current = true;
  };

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
            <select
              value={selectLimit}
              onChange={(event) => setSelectLimit(event.target.value)}
              name='limit'
              id='limit'
            >
              <option value='5'>Limit: 5</option>
              <option value='10'>Limit: 10</option>
              <option value='15'>Limit: 15</option>
              <option value='20'>Limit: 20</option>
            </select>
            <img src={arrowButtom} alt='Arrow buttom' />
          </div>

          <button onClick={handlOrderAsc} className={styles.sortBtn}>
            <img
              src={activeButtonAsc.current ? sortTopRed : sortTop}
              alt='Sort top'
            />
          </button>

          <button onClick={handlOrderDesc} className={styles.sortBtn}>
            <img
              src={activeButtonDesc.current ? sortBottomRed : sortBottom}
              alt='Sort bottom'
            />
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
