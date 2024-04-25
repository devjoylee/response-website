import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const navs = [
    { id: 0, name: 'About', url: '/about' },
    { id: 1, name: 'Services', url: '/' },
    { id: 2, name: 'Work', url: '/' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <Image src='/logo.svg' alt='response logo' width={150} height={46} />
        </Link>

        <ul className={styles.nav}>
          {navs.map((nav) => (
            <li key={nav.id}>
              <Link href={nav.url}>{nav.name}</Link>
            </li>
          ))}
        </ul>

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
      </div>
    </header>
  );
};

export default Header;
