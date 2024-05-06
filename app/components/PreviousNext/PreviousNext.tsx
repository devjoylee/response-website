'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import { workData } from '@/app/data/work';

interface PreviousNextProps {
  isFirst?: boolean;
  isLast?: boolean;
}

const PreviousNext = ({}: PreviousNextProps) => {
  const pathname = usePathname();
  const current = workData.findIndex((item) => item.linkTo === pathname);

  const isFirst = current === 0;
  const isLast = current === workData.length - 1;

  return (
    <div className={styles.buttons}>
      <button>
        {!isFirst && (
          <Link href={workData[current - 1].linkTo}>
            <div className={styles.iconWrap}>
              <Image src='/logo/logo-notext.png' alt='icon' width={30} height={30} />
            </div>
            <span>Previous</span>
          </Link>
        )}
      </button>
      <button>
        {!isLast && (
          <Link href={workData[current + 1].linkTo}>
            <span>Next</span>
            <div className={styles.iconWrap}>
              <Image src='/logo/logo-notext.png' alt='icon' width={30} height={30} />
            </div>
          </Link>
        )}
      </button>
    </div>
  );
};

export default PreviousNext;
