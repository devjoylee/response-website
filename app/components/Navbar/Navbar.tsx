'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import SocialIcons from '../SocialIcons/SocialIcons';
import { usePathname } from 'next/navigation';

const navs = [
  { id: 0, name: 'About', url: '/about' },
  { id: 1, name: 'Services', url: '/service' },
  { id: 2, name: 'Work', url: '/work' },
];

const Navbar = ({ isMain }: { isMain?: boolean }) => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const toggleNavbar = () => {
    setIsOpened((o) => !o);
    document.body.classList.toggle('noScroll');
  };

  return (
    <div className={styles.nav}>
      <div className={`${styles.navInner} ${isOpened ? styles.open : ''}`} onClick={toggleNavbar}>
        <ul className={`${styles.navlist} neue-r`}>
          {navs.map((nav) => (
            <li key={nav.id} className={pathname === nav.url ? styles.active : ''}>
              <Link href={nav.url}>{nav.name}</Link>
            </li>
          ))}
        </ul>

        <SocialIcons whiteBG={isMain || isOpened} />
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
