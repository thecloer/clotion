import React from 'react';
import Heading from './_components/heading';
import Heroes from './_components/heroes';
import Footer from './_components/footer';

const MarketingPage = () => {
  return (
    <div className='flex flex-col min-h-full'>
      <div className='flex flex-col flex-1 items-center gap-y-8 px-6 pt-10 text-center'>
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
