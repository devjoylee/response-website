import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { SocialIcons } from '../../components';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.container}>
        <li>
          <Image src='/assets/logo-notext.png' alt='response logo' width={50} height={0} />
        </li>
        <li className={styles.email}>
          <p>Email</p> contact@responseadvertising.ca
          <SocialIcons />
        </li>
        <li>
          <p>Offices</p>
          Vancouver <br />
          Suite 1157 - 409 Granville St, <br />
          Vancouver, BC
          <br />
          Canada, V6C 1T2
        </li>
        <li>
          <p>&nbsp;</p>
          Toronto
          <br />
          99 Spadina Ave, <br />
          Toronto, ON <br />
          Canada, M5V 3P8
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
