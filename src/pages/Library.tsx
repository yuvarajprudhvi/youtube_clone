import React from 'react';
import { Clock, ThumbsUp, PlaySquare } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const sections = [
  { icon: Clock, title: 'History', count: '12 videos' },
  { icon: ThumbsUp, title: 'Liked videos', count: '24 videos' },
  { icon: PlaySquare, title: 'Your videos', count: '3 videos' },
];

export default function Library() {
  const isMobile = useIsMobile();

  return (
    <div className={`p-4 ${isMobile ? 'pb-20' : ''}`}>
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-2xl font-bold mb-6">Library</h1>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <section.icon size={24} className="text-gray-600" />
              <div>
                <h2 className="font-medium">{section.title}</h2>
                <p className="text-sm text-gray-600">{section.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}