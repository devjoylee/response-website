import React from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';

import imgURL from './assets/packet.png';

const WorkDetailPage = () => {
  return (
    <section className={styles.subPage}>
      <div className={styles.video}></div>
      <div className={styles.title}>
        <span>TELUS</span>
        <h3>2023 The Ying-Yang Red Packet</h3>
      </div>
      <div className={styles.description}>
        <dl>
          <dt>Challenge</dt>
          <dd>
            The Chinese community in Canada faced discrimination, hate, and bias amid the COVID-19
            pandemic. Between 2020 and 2021 reports of workplace discrimination against Asians grew
            by 348%, denial of service grew by 187%, cyber racism increased by 73%, and shunning by
            52%.
          </dd>
          <dd>
            As the Lunar New Year approached, the client, TELUS, wanted to create a red packet
            design that would bring positivity and harmony to the community. The challenge was to
            create a design that would reflect the cultural significance of the festival and TELUS’
            brand identity while appealing to the Chinese community.
          </dd>
        </dl>
        <dl>
          <dt>Insights & Strategy</dt>
          <dd>
            To understand the Chinese community’s cultural beliefs and values, we conducted research
            that led us to discover that the Chinese zodiac identified 2023 as the year of the
            Rabbit, a symbol of longevity, harmony, and prosperity. These cultural insights became
            the foundation of our design process, which focused on incorporating the Rabbit as a
            positive sign in the Red Packets design. The Yin-Yang concept was also introduced to
            represent harmony, polyphony, and equality.
          </dd>
        </dl>
        <dl>
          <dt>Execution</dt>
          <div className={styles.flex}>
            <div>
              <dd>
                The design incorporated a traditional illustration of the bunnies, reminding people
                of the sanctity of the festival rooted in traditional patterns. The two rabbits are
                shaped in Yin-Yang and surrounded by Lunar-New-Year-themed items, including
                tangerine (a symbol of luck), longevity peach (a symbol of long life), fireworks (a
                symbol of celebration), gold ingot (a symbol of wealth), flower (a symbol of
                prosperity) and other culturally relevant items.
              </dd>
              <dd>
                We created two colour variations of this design: one in traditional red envelopes
                and the other in purple. The colour red is widely associated with the Lunar New Year
                across different cultures. The colour purple is not only the TELUS’ brand colour but
                also a symbol of luck, fortune, and spiritual awareness in different Asian cultures.
              </dd>
            </div>
            <Image src={imgURL} alt='packet' width={500} height={0} />
          </div>
        </dl>
        <dl>
          <dt>Results</dt>
          <dd>
            As a giveaway, the Red Packets were strategically placed in stores located in densely
            populated Chinese communities such as Vancouver, Richmond Hill, Markham, Richmond, and
            Toronto amongst others. The designs were in high demand as Chinese communities ushered
            in the year of the rabbit with a renewed energy and positive outlook.
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default WorkDetailPage;
