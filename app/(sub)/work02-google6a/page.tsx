import React from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';
import { FadeMotion } from '@/app/components';

import img01 from './assets/img01.jpg';
import img02 from './assets/img02.png';

const WorkDetailPage = () => {
  return (
    <section className={`${styles.subPage} ${styles.page02}`}>
      <FadeMotion>
        <div className={styles.video}>
          <video autoPlay loop controls style={{ width: '100%', height: 'auto' }}>
            <source src='/assets/video/02.mp4' />
          </video>
        </div>
        <div className={styles.title}>
          <span>TELUS</span>
          <h3>Google Pixel 6a</h3>
        </div>
      </FadeMotion>
      <div className={styles.description}>
        <FadeMotion>
          <h4>Challenge</h4>
          <p>
            Google over the last decade has been emerging as a strong challenger brand in a highly
            competitive Smartphone market. With its Pixel series, while Google has redefined
            photography, it has also successfully managed to integrate its suite of services to
            provide a seamless user experience. Google, driven to simplify everyday problems for its
            users, tasked us to launch the new Pixel 6a with a focus on its key ‘Live Translate’
            feature that enables users to instantly translate a variety of languages across
            applications in real time, thus enabling them to seamlessly engage in their preferred
            language without any barriers. Our focus audience segment for the launch were millennial
            Mandarin speakers in Canada who were identified as a key segment for driving market
            share. Our challenge was to ensure that we not only create buzz for the launch but also
            effectively demonstrate the “Live Translate” feature while avoiding any spillage of
            media dollars towards non-Mandarin speakers.
          </p>
        </FadeMotion>
        <FadeMotion>
          <h4>Insight & Strategy</h4>
          <p>
            Any person who is bilingual is attuned to translating words in real time with a 3 step
            process, you see a word in one language, your brain maps those words to a language you
            are most comfortable with and finally process it as meaningful information. This
            everyday process for Mandarin speakers ranges from a few seconds to a couple of minutes
            depending on their language proficiency with English, but we wanted to make them
            understand that at least on their Pixel 6a they can now skip the hassle of this 3 step
            process. Our other insight was rooted in the generic behavior post pandemic wherein more
            and more people were out and about hence making OOH as a central pillar of our Media
            Strategy to ensure that we are able to cut through the clutter of Digital advertising.
          </p>
        </FadeMotion>
        <FadeMotion>
          <p>
            The solution, amalgamating from these two insights and based on our millennial target
            audience was identified in a decade old format that millennials have grown up engaging
            with - Lenticular. A simple ad format wherein two frames are simultaneously put up such
            that on changing a slight angle of observation one is able to switch between different
            frames, instantaneously!
          </p>
        </FadeMotion>
        <FadeMotion>
          <p>
            <Image src={img01} alt='image' width={2000} height={0} />
          </p>
        </FadeMotion>
        <FadeMotion>
          <h4>Execution</h4>
          <p>
            Lenticular printing technology gave us the solution to our first challenge of an
            impactful ‘real-time’ demonstration of the product feature relevant to the target
            audience.
            <br />
            Our second challenge of ensuring efficient use of dollars to avoid spillage was
            addressed by identifying the high density Mandarin speaking geo location leveraging FSA
            as well as the Meta digital data. The data points enabled us to strategically buy
            Transit Shelters, Store Posters and Horizontal banners within communities with the
            maximum Mandarin footfall across the Greater Toronto and Greater Vancouver Areas.
            <br />
            The creative leveraged was simple yet engaging with the same message in Mandarin that
            transformed to English as people moved, thus enabling Mandarin speakers to experience
            Live Translate, the core feature of the Google Pixel 6a come alive in front of their
            eyes.
          </p>
        </FadeMotion>
        <FadeMotion>
          <p>
            <Image src={img02} alt='image' width={2000} height={0} data-id='0' />
          </p>
        </FadeMotion>
        <FadeMotion>
          <h4>Result</h4>
          <p>
            The OOH campaign was complemented by digital, radio, TV, online video and print. The OOH
            medium delivered the highest brand recall for the campaign indicating people
            comprehended the message to its fullest. It was also estimated to deliver approximately
            38M impressions, a stellar number considering a highly niche audience, thereby making
            the campaign an “Instant” success.
          </p>
        </FadeMotion>
      </div>
    </section>
  );
};

export default WorkDetailPage;
