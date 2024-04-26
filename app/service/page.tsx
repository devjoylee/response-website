import React from 'react';
import styles from './styles.module.css';
import { Headline } from '../components';

const ServicePage = () => {
  return (
    <div className={styles.servicePage}>
      <Headline width={185} first=' Services handcrafted' typeStrings={['for you']} />
    </div>
  );
};

export default ServicePage;
