import React from 'react';
import styles from './styles.module.css';
import { FadeMotion, Headline, ServiceCard } from '@/app/components';
import { serviceList } from './list';

const ServicePage = () => {
  return (
    <div className={styles.servicePage}>
      <Headline width={185} first=' Services handcrafted' typeStrings={['for you']} />

      <div className='maxWidth'>
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
