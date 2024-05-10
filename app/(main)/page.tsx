import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { Headline } from '@/app/components';
import { workData } from '@/app/data/work';

export default function Home() {
  return (
    <div className={`${styles.homePage}`}>
      <Headline
        width={310}
        t1='The Return on'
        typeStrings={[
          'Investment',
          'Imagination',
          'Inclusion',
          'Influence',
          'Innovation',
          'Inspiration',
          'Integration',
        ]}
        t3='agency'
      />

      <section className={styles.works}>
        <h3 className='neue-b maxWidth'>Our work</h3>
        <div className={styles.slider}>
          {workData.slice(0, 5).map((work, i) => (
            <Link href={work.linkTo} key={i}>
              <Image src={work.imageURL} alt={work.title} width={500} height={0} />
              <div className={styles.overlay}>
                <span>{work.client.toUpperCase()}</span>
                <p>{work.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
