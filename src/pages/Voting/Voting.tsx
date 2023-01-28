import React from 'react';
import { useLocation } from 'react-router-dom';
import LeftSection from '../../components/LeftSection/LeftSection';
import RightVoting from '../../components/RightVoting/RightVoting';
import styles from './Voting.module.scss';

const Voting: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname, 'voting');

  return (
    <div className='container'>
      <div className={styles.root}>
        <LeftSection />
        <RightVoting />
      </div>
    </div>
  );
};

export default Voting;
