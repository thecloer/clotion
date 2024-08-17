'use client';

import { Button } from '@/components/ui/button';
import Spinner from '@/components/spinner';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth, useUser } from '@/lib/dummy-auth';

const NavButtons = () => {
  // TODO: Authentication
  const { isAuthenticated, isLoading } = useAuth();
  const { avatarUrl } = useUser();

  if (isLoading) return <Spinner />;

  if (isAuthenticated)
    return (
      <>
        <Button variant='ghost' size='sm' asChild>
          <Link href='/documents'>Documents</Link>
        </Button>

        <Link href='/'>
          <Image src={avatarUrl} alt='Avatar' width={32} height={32} className='border rounded-full' />
        </Link>
      </>
    );

  return (
    <Button variant='ghost' size='sm'>
      Log in
    </Button>
  );
};

export default NavButtons;
