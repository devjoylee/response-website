import React from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';

import img01 from './assets/img01.jpg';
import img02 from './assets/img02.jpg';
import img03 from './assets/img03.jpg';
import img04 from './assets/img04.jpg';
import preview from './assets/preview.gif';

import { FadeMotion } from '@/app/components';

const WorkDetailPage = () => {
  return (
    <section className={`${styles.subPage} ${styles.page00}`}>
      <FadeMotion>
        <div className={styles.video}>
          <video loop controls style={{ width: '100%', height: 'auto' }}>
            <source src='/assets/video/00.mp4' />
          </video>
        </div>
        <div className={styles.title}>
          <span>TELUS</span>
          <h3>2019 Vaisakhi</h3>
        </div>
      </FadeMotion>
      <div className={styles.description}>
        <FadeMotion>
          <h4>Challenge</h4>
          <p>
            The MC consumer is one that is value driven and is at all times looking for the best
            deals in the market. The flanker brands were perceived to be “affordable” as they had
            mobile plans which were budget friendly in comparison to TELUS/ Rogers which were
            considered to be “more premium” in their offering.
          </p>
          <p>
            As the focus on Multicultural segments continued to grow in 2019, TELUS needed to be in
            market with a specific STIM period aimed at the South Asian community in celebration of
            this holiday. They needed to culturally connect with this segment with their
            communication aimed at promoting a device discount during this festive period. The
            overall objective was to capitalize on this period to increase awareness and drive
            conversions among this segment.
          </p>
        </FadeMotion>
        <FadeMotion>
          <h4>Solution</h4>
          <p>
            TELUS needed to capitalise on every opportunity to bridge this perception gap and
            increase the awareness and consideration scores amongst this audience by building brand
            affinity and displaying value.
          </p>
          <p>
            Using the specific cultural insights and elements of the festival, we developed an
            emotional connect with the multicultural consumer and created a sense of belonging
            amongst the segment.
          </p>
        </FadeMotion>
        <FadeMotion>
          <h4>Results</h4>
          <div className={styles.flex}>
            <div>
              <p>Overall high engagement rate of 1.31%</p>
              <p>
                <b>Awareness</b> <br />
                Increased from 41% in Q1 to 54% in Q2 in ON
                <br />
                Increased from 63% in Q1 to 79% in Q2 in BC/AB
              </p>
              <p>
                <b>Digital</b> <br />
                Delivered over 1.4million impressions with 12K+ Clicks, a CTR of 0.85% <br />
                (Well above our benchmark of 0.55%)
              </p>
            </div>
            <Image src={preview} alt='image' width={400} height={0} data-id='0' />
          </div>
        </FadeMotion>
        <FadeMotion>
          <div className={styles.flex}>
            <Image src={img01} alt='image' width={1000} height={0} data-id='1' />
            <Image src={img02} alt='image' width={1000} height={0} data-id='2' />
          </div>
        </FadeMotion>
        <FadeMotion>
          <Image src={img03} alt='image' width={2000} height={0} data-id='3' />
        </FadeMotion>
        <FadeMotion>
          <Image src={img04} alt='image' width={2000} height={0} data-id='4' />
        </FadeMotion>
      </div>
    </section>
  );
};

export default WorkDetailPage;
