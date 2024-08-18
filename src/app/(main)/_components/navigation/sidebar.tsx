'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ChevronsLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigationControl } from './navigation-control-context';

export const Sidebar = () => {
  const { sidebarRef, isMobile, isCollapsed, isSetting, handleResizeMouseDown, collapseSidebar } =
    useNavigationControl();

  const pathname = usePathname();

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'absolute md:relative z-[99999] flex flex-col bg-secondary w-60 h-full overflow-y-auto group/sidebar translate-x-0',
        isSetting && 'transition-all ease-in-out duration-300',
        isCollapsed && '-translate-x-full'
      )}
    >
      <button
        className='top-3 right-2 absolute hover:bg-neutral-300 dark:hover:bg-neutral-600 opacity-0 group-hover/sidebar:opacity-100 rounded-sm w-6 h-6 text-muted-foreground transition'
        onClick={collapseSidebar}
      >
        <ChevronsLeft className='w-6 h-6' />
      </button>
      <div>
        <p>Action items</p>
      </div>
      <div className='mt-4'>
        <p>Documents</p>
      </div>

      {!isMobile && (
        <div
          onMouseDown={handleResizeMouseDown}
          onClick={() => {}}
          className='top-0 right-0 absolute bg-primary/10 opacity-0 group-hover/sidebar:opacity-100 w-1 h-full transition cursor-ew-resize'
        />
      )}
    </aside>
  );
};
Sidebar.displayName = 'Sidebar';
