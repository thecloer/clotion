import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const Logo = () => {
  return (
    <Link href='/' className='md:flex items-center gap-x-2 hidden pr-2 select-none'>
      <Image alt='Logo' src='/logo.svg' width={40} height={40} className='dark:hidden' />
      <Image alt='Logo' src='/logo-dark.svg' width={40} height={40} className='dark:block hidden' />
      <span className={cn('font-semibold', font.className)}>Clotion</span>
    </Link>
  );
};

export default Logo;
