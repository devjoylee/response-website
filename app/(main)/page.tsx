'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Typewriter from 'typewriter-effect';

import { FadeMotion, WorkGallery } from '@/app/components';
import { workData } from '@/app/data/work';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.homePage}>
      <section className={styles.tagline}>
        <div className={styles.line1}>
          <span>The Return on&nbsp;</span>
        </div>
        <div className={styles.line2}>
          <div className={`${styles.typingBox} neue-m`}>
            <Typewriter
              options={{
                strings: [
                  'Investment',
                  'Imagination',
                  'Inclusion',
                  'Influence',
                  'Innovation',
                  'Inspiration',
                  'Integration',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <span>agency</span>
        </div>
      </section>
      <div className={styles.temp} onClick={handleClick}>
        <Image
          src='https://github.com/devjoylee/response-website/assets/68415905/99740908-55e9-45a2-9193-a53246b1dab2'
          // src='/icon/scroll.gif'
          alt=''
          width={70}
          height={0}
          className={styles.scrollIcon}
        />
      </div>

      <section className={styles.workSection} ref={scrollRef}>
        <FadeMotion>
          <h3 className='neue-b'>Our work</h3>
          <WorkGallery data={workData} />
        </FadeMotion>
      </section>
    </div>
  );
}
