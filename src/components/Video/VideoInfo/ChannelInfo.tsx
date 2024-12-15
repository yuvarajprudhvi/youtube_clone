import React from 'react';
import { SubscribeButton } from './SubscribeButton';

interface ChannelInfoProps {
  channel: string;
  isSubscribed: boolean;
  onSubscribe: () => void;
}

export function ChannelInfo({ channel, isSubscribed, onSubscribe }: ChannelInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      <div>
        <p className="font-medium">{channel}</p>
        <p className="text-sm text-gray-600">1.2M subscribers</p>
      </div>
      <SubscribeButton isSubscribed={isSubscribed} onClick={onSubscribe} />
    </div>
  );
}