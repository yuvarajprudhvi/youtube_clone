import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad, Newspaper, Trophy, Flame } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: Clock, label: 'History' },
  { icon: ThumbsUp, label: 'Liked Videos' },
  { icon: PlaySquare, label: 'Your Videos' },
  { icon: Film, label: 'Movies' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
  { icon: Flame, label: 'Trending' },
];

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-14 w-64 h-screen bg-white border-r overflow-y-auto transition-transform duration-300 md:translate-x-0 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } hidden md:block`}>
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-4 px-6 py-2 hover:bg-gray-100"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}