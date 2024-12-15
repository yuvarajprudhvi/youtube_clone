import React from 'react';
import CategoryBar from '../components/Category/CategoryBar';
import VideoGrid from '../components/Video/VideoGrid';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Explore() {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'pb-20' : ''}`}>
      <CategoryBar />
      <VideoGrid />
    </div>
  );
}