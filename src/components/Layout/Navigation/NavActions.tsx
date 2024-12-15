import React from 'react';
import { Bell, User, Search } from 'lucide-react';
import { useIsMobile } from '../../../hooks/useIsMobile';

export default function NavActions() {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center gap-2">
      {isMobile && (
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search size={24} />
        </button>
      )}
      {!isMobile && (
        <>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={24} />
          </button>
        </>
      )}
    </div>
  );
}