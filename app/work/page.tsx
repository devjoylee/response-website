import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { Headline } from '../components';

const WorkPage = () => {
  return (
    <div className={styles.workPage}>
      <Headline first='Our work' />
    </div>
  );
};

export default WorkPage;
