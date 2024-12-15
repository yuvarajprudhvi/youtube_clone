import React from 'react';
import { Video } from '../../types/video';
import { useIsMobile } from '../../hooks/useIsMobile';

interface VideoPlayerProps {
  video: Video;
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  const isMobile = useIsMobile();

  return (
    <div className={`relative ${isMobile ? 'aspect-video' : 'pb-[56.25%]'} bg-black rounded-lg overflow-hidden`}>
      <img
        src={video.thumbnail}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-70 p-4 rounded-full">
          <p className="text-white">Video Player Placeholder</p>
        </div>
      </div>
    </div>
  );
}