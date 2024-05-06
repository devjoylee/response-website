import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { FadeMotion, Headline, WorkCard } from '@/app/components';
import { workList } from './list';

const WorkPage = () => {
  return (
    <div className={styles.workPage}>
      <Headline first='Our work' />
      <div className='maxWidth'>
        <section className={styles.workList}>
          {workList.map((item, i) => (
            <FadeMotion key={i}>
              <Link href={item.likeTo} key={i}>
                <WorkCard imageURL={item.imageURL} client={item.client} title={item.title} />
              </Link>
            </FadeMotion>
          ))}
        </section>
      </div>
    </div>
  );
};

export default WorkPage;
