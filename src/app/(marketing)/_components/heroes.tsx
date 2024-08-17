import Image from 'next/image';
import React from 'react';

const Heroes = () => {
  return (
    <div className='flex justify-center items-center max-w-5xl pointer-events-none select-none'>
      <div className='relative w-[300px] sm:w-[350px] md:w-[400px] aspect-square'>
        <Image alt='Documents' src='/documents.png' fill className='dark:hidden object-contain' />
        <Image alt='Documents' src='/documents-dark.png' fill className='dark:block hidden object-contain' />
      </div>
      <div className='md:block relative hidden w-[400px] h-[400px] aspect-square'>
        <Image alt='Reading' src='/reading.png' fill className='dark:hidden object-contain' />
        <Image alt='Reading' src='/reading-dark.png' fill className='dark:block hidden object-contain' />
      </div>
    </div>
  );
};

export default Heroes;
