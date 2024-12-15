import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Shorts() {
  const isMobile = useIsMobile();

  return (
    <div className={`p-4 ${isMobile ? 'pb-20' : ''}`}>
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-2xl font-bold mb-4">Shorts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Placeholder for Shorts content */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center"
            >
              <p className="text-gray-500">Short #{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}