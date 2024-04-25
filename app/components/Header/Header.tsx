import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Navbar, SocialIcons, Headline } from '../../components';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <Image src='/assets/logo.svg' alt='response logo' width={200} height={0} />
        </Link>

        <Navbar />
        <SocialIcons />
      </div>

      <Headline />
    </header>
  );
};

export default Header;
