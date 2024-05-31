'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Navbar } from '@/app/components';
import { usePathname } from 'next/navigation';

import useMousePosition from '@/app/hooks/useMousePosition';
import { navData } from '@/app/data/nav';

const Header = ({ hasBG }: { hasBG?: boolean }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  useMousePosition();

  return (
    <header
      className={`${isHome ? styles.full_height : ''} ${
        hasBG ? styles.header_bg : styles.header_no_bg
      }`}
    >
      <div className={styles.container}>
        <Link href='/' onClick={(e) => e.stopPropagation}>
          <Image
            className={styles.logo}
            src={hasBG ? '/logo/logo-white.png' : '/logo/logo-color.png'}
            alt='response logo'
            width={180}
            height={0}
          />
        </Link>

        <Navbar hasBG={hasBG} navData={navData} />
      </div>

      {hasBG && (
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

      {hasBG && !isHome && navData.filter((nav) => nav.url === pathname)[0].headline}
    </header>
  );
};

export default Header;
