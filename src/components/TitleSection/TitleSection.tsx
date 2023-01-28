import React from 'react';
import styles from './TitleSection.module.scss';

type TitleSectionProps = {
  name: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({ name }) => {
  return <div className={styles.root}>{name}</div>;
};

export default TitleSection;
