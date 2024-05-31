'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { GradientBackground, Navbar } from '@/app/components';
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

      {hasBG && <GradientBackground />}

      {hasBG && !isHome && navData.filter((nav) => nav.url === pathname)[0].headline}
    </header>
  );
};

export default Header;
