'use client';

import React from 'react';
import styles from './styles.module.css';
import Typewriter from 'typewriter-effect';

interface HeadlineProps {
  first: string;
  secondL?: string;
  secondR?: string;
  typeStrings?: string[];
  width?: number;
}

const Headline = ({ first, secondL, secondR, typeStrings, width }: HeadlineProps) => {
  return (
    <h1 className={styles.headline}>
      {first}
      <div className={styles.textWrapper}>
        {secondL && <span>{secondL}&nbsp;</span>}
        {typeStrings && (
          <div className={`${styles.typingBox} neue-m`} style={{ width: width + 'px' }}>
            <Typewriter
              options={{
                strings: typeStrings,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        )}
        {secondR && <span>{secondR}</span>}
      </div>
    </h1>
  );
};

export default Headline;
