import React from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';
import { FadeMotion } from '@/app/components';

import imgURL from './assets/packet.png';

const WorkDetailPage = () => {
  return (
    <section className={`${styles.subPage} ${styles.page04}`}>
      <FadeMotion>
        <div className={styles.video}>
          <video loop controls style={{ width: '100%', height: 'auto' }}>
            <source src='/assets/video/04.mp4' />
          </video>
        </div>
        <div className={styles.title}>
          <span>TELUS</span>
          <h3>2023 The Ying-Yang Red Packet</h3>
        </div>
      </FadeMotion>

      <div className={styles.description}>
        <FadeMotion>
          <h4>Challenge</h4>
          <p>
            The Chinese community in Canada faced discrimination, hate, and bias amid the COVID-19
            pandemic. Between 2020 and 2021 reports of workplace discrimination against Asians grew
            by 348%, denial of service grew by 187%, cyber racism increased by 73%, and shunning by
            52%.
          </p>
          <p>
            As the Lunar New Year approached, the client, TELUS, wanted to create a red packet
            design that would bring positivity and harmony to the community. The challenge was to
            create a design that would reflect the cultural significance of the festival and TELUS’
            brand identity while appealing to the Chinese community.
          </p>
        </FadeMotion>
        <FadeMotion>
          <h4>Insights & Strategy</h4>
          <p>
            To understand the Chinese community’s cultural beliefs and values, we conducted research
            that led us to discover that the Chinese zodiac identified 2023 as the year of the
            Rabbit, a symbol of longevity, harmony, and prosperity. These cultural insights became
            the foundation of our design process, which focused on incorporating the Rabbit as a
            positive sign in the Red Packets design. The Yin-Yang concept was also introduced to
            represent harmony, polyphony, and equality.
          </p>
        </FadeMotion>
        <FadeMotion>
          <h4>Execution</h4>
          <div className={styles.flex}>
            <div className={styles.flex50}>
              <p>
                The design incorporated a traditional illustration of the bunnies, reminding people
                of the sanctity of the festival rooted in traditional patterns. The two rabbits are
                shaped in Yin-Yang and surrounded by Lunar-New-Year-themed items, including
                tangerine (a symbol of luck), longevity peach (a symbol of long life), fireworks (a
                symbol of celebration), gold ingot (a symbol of wealth), flower (a symbol of
                prosperity) and other culturally relevant items.
              </p>
              <p>
                We created two colour variations of this design: one in traditional red envelopes
                and the other in purple. The colour red is widely associated with the Lunar New Year
                across different cultures. The colour purple is not only the TELUS’ brand colour but
                also a symbol of luck, fortune, and spiritual awareness in different Asian cultures.
              </p>
            </div>
            <Image src={imgURL} alt='packet' width={500} height={0} data-id='0' />
          </div>
        </FadeMotion>
        <FadeMotion>
          <h4>Results</h4>
          <p>
            As a giveaway, the Red Packets were strategically placed in stores located in densely
            populated Chinese communities such as Vancouver, Richmond Hill, Markham, Richmond, and
            Toronto amongst others. The designs were in high demand as Chinese communities ushered
            in the year of the rabbit with a renewed energy and positive outlook.
          </p>
        </FadeMotion>
      </div>
    </section>
  );
};

export default WorkDetailPage;
