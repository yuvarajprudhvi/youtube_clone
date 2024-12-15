import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, PlaySquare, Library } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Compass, label: 'Explore', path: '/explore' },
  { icon: PlaySquare, label: 'Shorts', path: '/shorts' },
  { icon: Library, label: 'Library', path: '/library' },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <div className="flex justify-around py-2">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                isActive ? 'text-red-600' : 'text-gray-600'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}