import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

import { WorkType } from '@/app/types';

interface WorkGalleryProps {
  data: WorkType[];
}

const WorkGallery = ({ data }: WorkGalleryProps) => {
  return (
    <div className={styles.gallery}>
      {data.slice(0, 5).map((work, i) => (
        <Link href={work.linkTo} key={i}>
          <Image src={work.imageURL} alt={work.title} width={500} height={0} />
          <div className={styles.overlay}>
            <span>{work.client.toUpperCase()}</span>
            <p>{work.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkGallery;
