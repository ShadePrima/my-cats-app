import React from 'react';
import Header from '../Header/Header';

import styles from './RightVoting.module.scss';
// import arrowLeft from '../../assets/icons/arrow-left.png';
import blackCat from '../../assets/voting/blackCat.png';

import likeWhite from '../../assets/icons/like.svg';
import heartWhite from '../../assets/icons/heart.svg';
import dislikeWhite from '../../assets/icons/dislike.svg';

import like from '../../assets/icons/like-green.png';
import heart from '../../assets/icons/heart-red.png';
import dislike from '../../assets/icons/dislike-green.png';
import { Link } from 'react-router-dom';
import ArrowLeft from '../buttons/ArrowLeft/ArrowLeft';
import TitleSection from '../TitleSection/TitleSection';

const RightVoting: React.FC = () => {
  return (
    <div className={styles.root}>
      <Header />

      <main className={styles.main}>
        <div className={styles.topButtons}>
          <Link to='/'>
            <div>
              <ArrowLeft />
            </div>
          </Link>
          <TitleSection name='Voting' />
        </div>

        <div className={styles.mainBlock}>
          <img className={styles.mainImg} src={blackCat} alt='Black Cat' />
          <div className={styles.likeButtonMenu}>
            <button className={styles.leftButton}>
              <img src={likeWhite} alt='like' />
            </button>
            <button className={styles.middleButton}>
              <img src={heartWhite} alt='heart' />
            </button>
            <button className={styles.rightButton}>
              <img src={dislikeWhite} alt='dislike' />
            </button>
          </div>
        </div>

        <div className={styles.historySection}>
          <div className={styles.historyItems}>
            <div className={styles.historyItem}>
              <div className={styles.time}>22:35</div>
              <div className={styles.text}>
                Image ID: <span>fQSunHvl8</span> was added to Favourites
              </div>
              <div className={styles.historyIcone}>
                <img className={styles.heart} src={heart} alt='heart' />
              </div>
            </div>
            <div className={styles.historyItem}>
              <div className={styles.time}>22:35</div>
              <div className={styles.text}>
                Image ID: <span>fQSunHvl8</span> was added to Favourites
              </div>
              <div className={styles.historyIcone}>
                <img src={like} alt='Like' />
              </div>
            </div>
            <div className={styles.historyItem}>
              <div className={styles.time}>22:35</div>
              <div className={styles.text}>
                Image ID: <span>fQSunHvl8</span> was added to Favourites
              </div>
              <div className={styles.historyIcone}>
                <img src={dislike} alt='' />
              </div>
            </div>
            <div className={styles.historyItem}>
              <div className={styles.time}>22:35</div>
              <div className={styles.text}>
                Image ID: <span>fQSunHvl8</span> was added to Favourites
              </div>
              <div className={styles.historyIcone}>
                <img src={heart} alt='Heart' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RightVoting;
