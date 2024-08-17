import React from 'react';
import Logo from './logo';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className='z-10 flex items-center gap-x-2 bg-background p-6 w-full'>
      <Logo />

      <div className='flex flex-wrap justify-center md:justify-end items-center gap-2 w-full text-muted-foreground'>
        <Button variant='ghost' size='sm'>
          Privacy Policy
        </Button>
        <Button variant='ghost' size='sm'>
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
