import React from 'react';
import LeftSection from '../../components/LeftSection/LeftSection';
import RightVoting from '../../components/RightVoting/RightVoting';
import styles from './Voting.module.scss';

const Voting: React.FC = () => {
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
