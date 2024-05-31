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

      <div className={styles.scrollIcon} onClick={handleClick}>
        <Image src='/icon/scroll.png' alt='' width={80} height={0} />
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
