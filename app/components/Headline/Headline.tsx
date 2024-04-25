'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './styles.module.css';

const Headline = () => {
  const pathname = usePathname();

  if (pathname === '/') {
    return (
      <h1 className={styles.headline}>
        The return on <br />
        <span className={`${styles.typingBox} neue-m`}>Inspiration</span> agency
      </h1>
    );
  } else if (pathname === '/about') {
    return (
      <h1 className={styles.headline}>
        The only about us page <br />
        that’s&nbsp;
        <span className={`${styles.typingBox} neue-m`}>about you</span>
      </h1>
    );
  } else if (pathname === '/service') {
    return (
      <h1 className={styles.headline}>
        Services handcrafted <br />
        <span className={`${styles.typingBox} neue-m`}>for you</span>
      </h1>
    );
  } else if (pathname === '/work') {
    return <h1 className={styles.headline}>Our work</h1>;
  }
};

export default Headline;
