import React, { PropsWithChildren } from 'react';
import Header from './_components/header';

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <main className='grow'>{children}</main>
    </div>
  );
};

export default MarketingLayout;
