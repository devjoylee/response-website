import React from 'react';
import styles from './styles.module.css';
import { FadeMotion, Headline, ServiceCard } from '@/app/components';
import { serviceData } from '@/app/data/service';

const ServicePage = () => {
  return (
    <div className={styles.servicePage}>
      <Headline width={185} t1='Services handcrafted' typer='for you' />

      <div className='maxWidth'>
        {serviceData.map((item, i) => (
          <FadeMotion key={i}>
            <ServiceCard iconURL={item.iconURL} name={item.name} description={item.description} />
          </FadeMotion>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
