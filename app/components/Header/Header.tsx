'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Navbar } from '@/app/components';
import { usePathname } from 'next/navigation';

import useMousePosition from '@/app/hooks/useMousePosition';

interface HeaderProps {
  isMain?: boolean;
}

const Header = ({ isMain }: HeaderProps) => {
  const pathname = usePathname();
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [currPosition, setCurrPosition] = useState({ x: 500, y: 500 });

  useMousePosition();

  return (
    <header
      className={`${isMain ? styles.header_bg : styles.header_no_bg} ${
        pathname === '/' ? styles.full_height : ''
      }`}
    >
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

        <Navbar isMain={isMain} />
      </div>

      {isMain && (
        <div className={styles.gradient}>
          <svg xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <filter id='goo'>
                <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
                <feColorMatrix
                  in='blur'
                  mode='matrix'
                  values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                  result='goo'
                />
                <feBlend in='SourceGraphic' in2='goo' />
              </filter>
            </defs>
          </svg>
          <div className={styles.gradientContainer}>
            <div className={styles.g1}></div>
            <div className={styles.g2}></div>
            <div className={styles.g3}></div>
            <div className={styles.g4}></div>
            <div className={styles.g5}></div>
            <span className='cursor'></span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
