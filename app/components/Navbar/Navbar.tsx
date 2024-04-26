'use client';

import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

const navs = [
  { id: 0, name: 'About', url: '/about' },
  { id: 1, name: 'Services', url: '/service' },
  { id: 2, name: 'Work', url: '/work' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className={`${styles.nav} neue-r`}>
      {navs.map((nav) => (
        <li key={nav.id} className={pathname === nav.url ? styles.active : ''}>
          <Link href={nav.url}>{nav.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
