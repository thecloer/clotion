'use client';

import React, { PropsWithChildren } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/lib/dummy-auth';
import Spinner from '@/components/spinner';
import { Navigation } from './_components/navigation';

function MainLayout({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading } = useAuth(); // TODO: Authentication

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-full'>
        <Spinner size='lg' />
      </div>
    );

  if (!isAuthenticated) return redirect('/');

  return (
    <div className='flex h-full'>
      <Navigation.ControlProvider>
        <Navigation.Sidebar />
        <div className='flex flex-col flex-1'>
          <Navigation.Header />
          <main className='flex-1 bg-yellow-300 overflow-y-auto'>{children}</main>
        </div>
      </Navigation.ControlProvider>
    </div>
  );
}

export default MainLayout;
