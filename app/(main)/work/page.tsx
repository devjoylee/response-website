import React from 'react';
import styles from './styles.module.css';
import { FadeMotion, Headline, WorkCard } from '../../components';
import { workList } from './list';

const WorkPage = () => {
  return (
    <div className={styles.workPage}>
      <Headline first='Our work' />
      <div className='maxWidth'>
        <section className={styles.workList}>
          {workList.map((item, i) => (
            <FadeMotion key={i}>
              <WorkCard imageURL={item.imageURL} client={item.client} title={item.title} />
            </FadeMotion>
          ))}
        </section>
      </div>
    </div>
  );
};

export default WorkPage;
