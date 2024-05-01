import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

interface WorkCardProps {
  imageURL: string;
  client: string;
  title: string;
}

const WorkCard = ({ imageURL, client, title }: WorkCardProps) => {
  return (
    <div className={styles.workCard}>
      <div className={styles.thumbnail}>
        <Image src={imageURL} alt={title} width={500} height={0} />
      </div>
      <span>{client.toUpperCase()}</span>
      <p>{title}</p>
    </div>
  );
};

export default WorkCard;
