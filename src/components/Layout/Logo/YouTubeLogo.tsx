import React from 'react';
import { Video } from 'lucide-react';
import { useIsMobile } from '../../../hooks/useIsMobile';

export default function YouTubeLogo() {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center gap-1">
      <Video size={28} className="text-red-600" />
      {!isMobile && (
        <span className="text-xl font-semibold">
          YouTube
        </span>
      )}
    </div>
  );
}