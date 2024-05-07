import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Navbar, SocialIcons } from '@/app/components';

interface HeaderProps {
  isMain?: boolean;
}

const Header = ({ isMain }: HeaderProps) => {
  return (
    <header className={isMain ? styles.header_bg : styles.header_no_bg}>
      <div className={styles.container}>
        <Link href='/'>
          <Image
            className={styles.logo}
            src={isMain ? '/logo/logo-white.png' : '/logo/logo-color.png'}
            alt='response logo'
            width={200}
            height={0}
          />
        </Link>

        <Navbar />
        <SocialIcons whiteBG={isMain} />
      </div>
    </header>
  );
};

export default Header;
