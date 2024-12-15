import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import VideoPlayer from '../components/Video/VideoPlayer';
import VideoInfo from '../components/Video/VideoInfo';
import Comments from '../components/Comments/Comments';
import { videos } from '../data/videos';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Watch() {
  const { videoId } = useParams();
  const video = videos.find(v => v.id === videoId);
  const isMobile = useIsMobile();

  if (!video) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={`p-4 ${isMobile ? 'pb-20' : ''}`}>
      <div className="max-w-[1280px] mx-auto">
        <VideoPlayer video={video} />
        <VideoInfo video={video} />
        <Comments videoId={video.id} />
      </div>
    </div>
  );
}