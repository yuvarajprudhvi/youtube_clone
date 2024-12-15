import React, { useState } from 'react';
import { Video } from '../../types/video';
import { ChannelInfo } from './VideoInfo/ChannelInfo';
import { VideoActions } from './VideoInfo/VideoActions';

interface VideoInfoProps {
  video: Video;
}

export default function VideoInfo({ video }: VideoInfoProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">{video.title}</h1>
      <div className="flex items-center justify-between mt-4">
        <ChannelInfo
          channel={video.channel}
          isSubscribed={isSubscribed}
          onSubscribe={() => setIsSubscribed(!isSubscribed)}
        />
        <VideoActions
          likes={likes}
          onLike={() => setLikes(likes + 1)}
        />
      </div>
    </div>
  );
}