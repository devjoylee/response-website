import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { Headline } from '@/app/components';
import { workList } from './work/list';

export default function Home() {
  return (
    <div className={`${styles.homePage}`}>
      <Headline
        width={260}
        first='The return on'
        typeStrings={[
          'Investment',
          'Imagination',
          'Inclusion',
          'Influence',
          'Innovation',
          'Inspiration',
          'Integration',
        ]}
        secondR='agency'
      />

      <section className={styles.works}>
        <h3 className='neue-b maxWidth'>Our work</h3>
        <div className={styles.slider}>
          {workList.slice(0, 5).map((item, i) => (
            <Link href={item.likeTo} key={i}>
              <Image src={item.imageURL} alt={item.title} width={500} height={0} />
              <div className={styles.overlay}>
                <span>{item.client.toUpperCase()}</span>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
