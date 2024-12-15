import React, { useState } from 'react';
import { Search, Menu, Video, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-1">
            <Video size={28} className="text-red-600" />
            <span className="text-xl font-semibold">YouTube</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
            />
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}