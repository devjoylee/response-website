'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

import { usePathname } from 'next/navigation';
import { NavType } from '@/app/types';
import { SocialIcons } from '@/app/components';

interface NavbarProps {
  hasBG?: boolean;
  navData: NavType[];
}

const Navbar = ({ hasBG, navData }: NavbarProps) => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  const toggleNavbar = () => {
    if (window.innerWidth <= 768) {
      setIsOpened((o) => !o);
      document.body.classList.toggle('noScroll');
    }
  };

  return (
    <div className={styles.nav}>
      <div className={`${styles.navInner} ${isOpened ? styles.open : ''}`} onClick={toggleNavbar}>
        <ul className={`${styles.navlist} neue-r`}>
          {navData.map((nav) => (
            <li key={nav.id} className={pathname === nav.url ? styles.active : ''}>
              <Link href={nav.url}>{nav.name}</Link>
            </li>
          ))}
        </ul>

        <SocialIcons whiteBG={hasBG || isOpened} />
      </div>

      <button
        className={`${styles.navbtn} ${isOpened ? styles.clicked : ''}`}
        onClick={toggleNavbar}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Navbar;
