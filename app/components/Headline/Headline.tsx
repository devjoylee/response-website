'use client';

import React from 'react';
import styles from './styles.module.css';
import Typewriter from 'typewriter-effect';

interface HeadlineProps {
  t1?: string;
  t2?: string;
  typer?: string;
  width?: number;
}

const Headline = ({ t1, t2, typer, width }: HeadlineProps) => {
  return (
    <h1 className={styles.headline}>
      {t1}&nbsp;
      <br />
      <div className={styles.textWrapper}>
        {t2 && <span>{t2}&nbsp;</span>}
        {typer && (
          <div className={`${styles.typingBox} neue-m`} style={{ width: width + 'px' }}>
            <Typewriter
              options={{
                strings: [typer],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        )}
      </div>
    </h1>
  );
};

export default Headline;
