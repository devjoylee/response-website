import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

interface ServiceCardProps {
  iconURL: string;
  name: string;
  description: React.JSX.Element;
}

const ServiceCard = ({ iconURL, name, description }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <Image src={iconURL} alt={name} width={200} height={0} />
      </div>
      <div className={styles.cardText}>
        <h3>{name}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
