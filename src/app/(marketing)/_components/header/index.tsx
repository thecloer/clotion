'use client';

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react';
import Logo from '../logo';
import { ThemeToggle } from '@/components/theme-toggle';
import NavButtons from './nav-buttons';

const Header = () => {
  const scrolled = useScrollTop();

  return (
    <header
      className={cn('z-10 bg-background sticky top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-sm')}
    >
      <Logo />
      <div className='flex justify-end items-center gap-2 w-full'>
        <NavButtons />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
