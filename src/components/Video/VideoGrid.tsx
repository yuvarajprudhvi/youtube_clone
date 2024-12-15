import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useIsMobile } from '../../hooks/useIsMobile';
import { videos } from '../../data/videos';

export default function VideoGrid() {
  const isMobile = useIsMobile();

  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ${
        isMobile ? 'pb-20' : ''
      }`}
    >
      {videos.map((video) => (
        <Link to={`/watch/${video.id}`} key={video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
}