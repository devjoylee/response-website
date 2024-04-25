import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

const SocialIcons = () => {
  return (
    <ul className={styles.sns}>
      <li>
        <Link href='https://www.instagram.com/responseadvertisinginc/' target='_blank'>
          <Image src='/icon/insta-white.png' alt='instagram icon' width={30} height={30} />
        </Link>
      </li>
      <li>
        <Link href='https://ca.linkedin.com/company/response-advertising-inc' target='_blank'>
          <Image src='/icon/linkedin-white.png' alt='linkedin icon' width={30} height={30} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
