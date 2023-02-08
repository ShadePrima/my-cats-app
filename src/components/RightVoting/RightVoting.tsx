import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import TitleSection from '../TitleSection/TitleSection';

import styles from './RightVoting.module.scss';
// import arrowLeft from '../../assets/icons/arrow-left.png';
import blackCat from '../../assets/voting/blackCat.png';
import likeWhite from '../../assets/icons/like.svg';
import heartWhite from '../../assets/icons/heart.svg';
import dislikeWhite from '../../assets/icons/dislike.svg';
import likeIcon from '../../assets/icons/like-green.png';
import heart from '../../assets/icons/heart-red.png';
import dislike from '../../assets/icons/dislike-green.png';
import ArrowLeft from '../buttons/ArrowLeft/ArrowLeft';
import loading from '../../assets/serviсes/loading.png';

const RightVoting: React.FC = () => {
  const [imageObj, setImageObj] = React.useState<any>({
    height: 164,
    id: '7r4',
    url: loading,
    width: 250,
  });
  console.log(imageObj, 'right Voting');

  const [likes, setLikes] = React.useState<any>([]);

  console.log(likes, 'like');

  //get one random image
  React.useEffect(() => {
    const getOneRandomImg = async () => {
      const result = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
      );

      const resultData = result.data;
      const resultDataObj = resultData.reduce(
        (target: any, key: any, index: any) => {
          target[index] = key;
          return target;
        }
      );

      setImageObj(resultDataObj);
    };
    getOneRandomImg();
  }, [likes]);

  const currentData = new Date();
  const currentHours = currentData.getHours();
  const currentMinutes = currentData.getMinutes();
  const myData = currentHours + ':' + currentMinutes;
  console.log(myData, 'myData');

  const handleLike = () => {
    setLikes([...likes, { ...imageObj, data: myData, section: 'Like' }]);
  };

  const handleFavourite = () => {
    setLikes([...likes, { ...imageObj, data: myData, section: 'Favourites' }]);
  };

  const handleDislike = () => {
    setLikes([...likes, { ...imageObj, data: myData, section: 'Dislike' }]);
  };

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
          <img className={styles.mainImg} src={imageObj.url} alt='Black Cat' />
          <div className={styles.likeButtonMenu}>
            <button onClick={handleLike} className={styles.leftButton}>
              <img src={likeWhite} alt='like' />
            </button>
            <button onClick={handleFavourite} className={styles.middleButton}>
              <img src={heartWhite} alt='heart' />
            </button>
            <button onClick={handleDislike} className={styles.rightButton}>
              <img src={dislikeWhite} alt='dislike' />
            </button>
          </div>
        </div>

        <div className={styles.historySection}>
          <div className={styles.historyItems}>
            {likes.map((like: any) => (
              <div key={like.id} className={styles.historyItem}>
                <div className={styles.dataTitle}>
                  <div className={styles.time}>{like.data}</div>
                  <div className={styles.text}>
                    Image ID: <span>{like.id}</span> was added to{' '}
                    <span>{like.section}</span>
                  </div>
                </div>
                <div className={styles.historyIcone}>
                  <img
                    className={styles.heart}
                    src={
                      like.section === 'Like'
                        ? likeIcon
                        : like.section === 'Favourites'
                        ? heart
                        : dislike
                    }
                    alt='heart'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RightVoting;
