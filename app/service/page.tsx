import React from 'react';
import styles from './styles.module.css';
import { FadeMotion, Headline, ServiceCard } from '../components';
import { serviceList } from './service';

const ServicePage = () => {
  return (
    <div className={styles.servicePage}>
      <Headline width={185} first=' Services handcrafted' typeStrings={['for you']} />

      <div className={styles.container}>
        {serviceList.map((item, i) => (
          <FadeMotion key={i}>
            <ServiceCard iconURL={item.iconURL} name={item.name} description={item.description} />
          </FadeMotion>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
