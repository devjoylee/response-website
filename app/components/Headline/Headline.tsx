'use client';

import React from 'react';
import styles from './styles.module.css';
import Typewriter from 'typewriter-effect';

interface HeadlineProps {
  t1?: string;
  t2?: string;
  t3?: string;
  typeStrings?: string[];
  hasLineBreak?: boolean;
  width?: number;
}

const Headline = ({ t1, t2, t3, typeStrings, width, hasLineBreak }: HeadlineProps) => {
  return (
    <h1 className={`${styles.headline} ${hasLineBreak ? styles.lineBreak : ''}`}>
      {t1}&nbsp;
      <div className={styles.textWrapper}>
        {t2 && <span>{t2}&nbsp;</span>}
        {typeStrings && (
          <div
            className={`${styles.typingBox} neue-m`}
            style={{ width: width + 'px' }}
            data-name='typeWriter'
          >
            <Typewriter
              options={{
                strings: typeStrings,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        )}
        {t3 && <span>{t3}</span>}
      </div>
    </h1>
  );
};

export default Headline;
