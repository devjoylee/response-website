import React from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';

import img01 from './assets/img01.jpg';
import img02 from './assets/img02.jpg';
import img03 from './assets/img03.jpg';
import img04 from './assets/img04.jpg';
import preview from './assets/preview.gif';

const WorkDetailPage = () => {
  return (
    <section className={styles.subPage}>
      <div className={styles.video}></div>
      <div className={styles.title}>
        <span>TELUS</span>
        <h3>2019 Vaisakhi</h3>
      </div>
      <div className={styles.description}>
        <dl>
          <dt>Challenge</dt>
          <dd>
            The MC consumer is one that is value driven and is at all times looking for the best
            deals in the market. The flanker brands were perceived to be “affordable” as they had
            mobile plans which were budget friendly in comparison to TELUS/ Rogers which were
            considered to be “more premium” in their offering.
          </dd>
          <dd>
            As the focus on Multicultural segments continued to grow in 2019, TELUS needed to be in
            market with a specific STIM period aimed at the South Asian community in celebration of
            this holiday. They needed to culturally connect with this segment with their
            communication aimed at promoting a device discount during this festive period. The
            overall objective was to capitalize on this period to increase awareness and drive
            conversions among this segment.
          </dd>
        </dl>
        <dl>
          <dt>Solution</dt>
          <dd>
            TELUS needed to capitalise on every opportunity to bridge this perception gap and
            increase the awareness and consideration scores amongst this audience by building brand
            affinity and displaying value.
          </dd>
          <dd>
            Using the specific cultural insights and elements of the festival, we developed an
            emotional connect with the multicultural consumer and created a sense of belonging
            amongst the segment.
          </dd>
        </dl>
        <dl>
          <dt>Results</dt>
          <div className={styles.flex}>
            <div>
              <dd>Overall high engagement rate of 1.31%</dd>
              <dd>
                <b>Awareness</b> <br />
                Increased from 41% in Q1 to 54% in Q2 in ON Increased from 63% in Q1 to 79% in Q2 in
                BC/AB
              </dd>
              <dd>
                <b>Digital</b> <br />
                Delivered over 1.4million impressions with 12K+ Clicks, a CTR of 0.85% (Well above
                our benchmark of 0.55%)
              </dd>
            </div>
            <Image src={preview} alt='image' width={500} height={0} />
          </div>
          <div className={styles.flex}>
            <Image src={img01} alt='image' width={2000} height={0} />
            <Image src={img02} alt='image' width={2000} height={0} />
          </div>
          <dd>
            <Image src={img03} alt='image' width={2000} height={0} />
            <Image src={img04} alt='image' width={2000} height={0} />
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default WorkDetailPage;
