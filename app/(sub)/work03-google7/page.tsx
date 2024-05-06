import React from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';

import imgURL from './assets/img01.png';

const WorkDetailPage = () => {
  return (
    <section className={styles.subPage}>
      <div className={styles.video}></div>
      <div className={styles.title}>
        <span>TELUS</span>
        <h3>Google Pixel 7 Pro Diwali</h3>
      </div>
      <div className={styles.description}>
        <dl>
          <dt>Background</dt>
          <dd>
            Google Pixel 7 Pro is a phone that comes with real time translation feature. Messages on
            chat applications get translated in a language of your choice as soon as you receive
            them. We wanted to communicate this feature to the South Asian immigrant population in
            Canada – a population that prefers speaking in their native language, as indeed this
            could be a very lucrative proposition for them.
          </dd>
        </dl>
        <dl>
          <dt>Our Challenge</dt>
          <dd>
            We wanted to communicate the feature of Google Pixel 7 Pro in a way that the South Asian
            immigrant population would immediately relate to and remember forever!
          </dd>
          <dd>
            <Image src={imgURL} alt='image' width={2000} height={0} />
          </dd>
        </dl>
        <dl>
          <dt>Our Answer</dt>
          <dd>
            We chose the occasion of Diwali – the biggest festival of the year for Hindi/ Punjabi
            speaking Indian immigrant population. And then we chose to depict the most ubiquitous
            symbol of Diwali – the Rangoli – a graphic artwork that is created on the floors of
            Indian homes by hand, on the occasion of Diwali. The ad showed a peacock proudly
            guarding the Rangoli it has made but as it sees some ducks coming towards it – it wants
            to ward them off but speaks English. Thanks to Google Pixel 7 Pro the message gets
            translated in real time i.e. just in time for ducks to change their course and the
            rangoli protected. The video ran on South Asian OTT platforms and on YouTube garnering
            2M impressions at a VTR of 88%.
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default WorkDetailPage;
