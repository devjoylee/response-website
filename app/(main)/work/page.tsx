import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { FadeMotion, Headline, WorkCard } from '@/app/components';
import { workData } from '@/app/data/work';

const WorkPage = () => {
  return (
    <div className={styles.workPage}>
      <Headline t1='Our work' />
      <div className='maxWidth'>
        <section className={styles.workList}>
          {workData.map((work, i) => (
            <FadeMotion key={i}>
              <Link href={work.linkTo} key={i}>
                <WorkCard imageURL={work.imageURL} client={work.client} title={work.title} />
              </Link>
            </FadeMotion>
          ))}
        </section>
      </div>
    </div>
  );
};

export default WorkPage;
