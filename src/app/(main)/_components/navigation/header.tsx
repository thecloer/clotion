import React from 'react';

import { Menu } from 'lucide-react';
import { useNavigationControl } from './navigation-control-context';

export const Header = () => {
  const { headerRef, isCollapsed, expandSidebar } = useNavigationControl();

  return (
    <header ref={headerRef} className='top-0 z-50 sticky bg-red-300 w-full transition-all duration-300 ease-in-out'>
      <nav className='bg-transparent px-3 py-2 w-full'>
        {isCollapsed && <Menu role='button' className='w-6 h-6 text-muted-foreground' onClick={expandSidebar} />}
      </nav>
    </header>
  );
};
