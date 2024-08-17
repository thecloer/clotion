'use client';

import Spinner from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/dummy-auth';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Heading = () => {
  const { isAuthenticated, isLoading } = useAuth();

  const getButtons = () => {
    if (isLoading)
      return (
        <div className='flex justify-center items-center w-full'>
          <Spinner size='lg' />
        </div>
      );

    if (isAuthenticated)
      return (
        <Button asChild>
          <Link href='/documents'>
            Enter Clotion <ArrowRight className='ml-2 w-4 h-4' />
          </Link>
        </Button>
      );

    // TODO: Authentication
    return (
      <Button>
        Get Clotion free <ArrowRight className='ml-2 w-4 h-4' />
      </Button>
    );
  };

  return (
    <div className='space-y-4 max-w-3xl'>
      <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl'>Clotion: Thecloer&apos;s Notion</h1>
      <h3 className='font-medium text-base sm:text-xl md:text-2xl'>A Notion app only for me.</h3>
      {getButtons()}
    </div>
  );
};

export default Heading;
