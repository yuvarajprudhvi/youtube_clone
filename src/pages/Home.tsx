import React from 'react';
import VideoGrid from '../components/Video/VideoGrid';
import CategoryBar from '../components/Category/CategoryBar';

export default function Home() {
  return (
    <div>
      <CategoryBar />
      <VideoGrid />
    </div>
  );
}