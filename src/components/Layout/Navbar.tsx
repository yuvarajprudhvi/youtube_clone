import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';
import YouTubeLogo from './Logo/YouTubeLogo';
import SearchBar from './Search/SearchBar';
import NavActions from './Navigation/NavActions';
import { useStore } from '../../store/useStore';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const { searchQuery, setSearchQuery } = useStore((state) => ({
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
  }));
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-4">
          {!isMobile && (
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={onMenuClick}
            >
              <Menu size={24} />
            </button>
          )}
          <Link to="/">
            <YouTubeLogo />
          </Link>
        </div>
        
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <NavActions />
      </div>
    </nav>
  );
}