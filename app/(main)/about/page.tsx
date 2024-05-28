import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { FadeMotion, Headline } from '@/app/components';

const AboutPage = () => {
  return (
    <div className={`${styles.aboutPage} maxWidth`}>
      <Headline width={235} t1='The only about us page' t2='that’s' typer='about you' />

      <div className={styles.container}>
        <FadeMotion>
          <h2>
            Our approach for all our clients has always been&nbsp;
            <span className={styles.divider}>
              <br />
            </span>
            about <b>helping you solve a problem.</b>
          </h2>
        </FadeMotion>
        <FadeMotion>
          <p>
            We make your problems, our problems. We see your customers as our customers. <br />
            This way, we become true partners in working towards your goal because the way we see
            it, your success is ours as well.
          </p>
        </FadeMotion>
        <FadeMotion>
          <p>
            We’ve been in the multicultural communications business now for the past 20 years. We’ve
            seen how your customers have changed and continue to become more and more diverse. We
            can tell you that it isn’t just all about language. <br />
            We see the deeper cultural insights that no one else does and we share that with you. As
            partners, our expertise becomes yours.
          </p>
        </FadeMotion>

        <FadeMotion>
          <Image src='/assets/about.jpg' alt='image' width={3000} height={0} />
        </FadeMotion>

        <FadeMotion>
          <p>
            We’re located in Vancouver and Toronto, but we come from all over the world. Every
            person on our team can bring insights from China, India, Hong Kong or the Philippines to
            name a few. We see ourselves as the bridge between your brand and our ever-changing
            multicultural landscape. <b>It’s a new way of going global and making it local.</b>
          </p>
        </FadeMotion>
      </div>
    </div>
  );
};

export default AboutPage;
