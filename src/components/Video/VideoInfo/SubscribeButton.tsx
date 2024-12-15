import React from 'react';

interface SubscribeButtonProps {
  isSubscribed: boolean;
  onClick: () => void;
}

export function SubscribeButton({ isSubscribed, onClick }: SubscribeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full ${
        isSubscribed ? 'bg-gray-100 text-gray-800' : 'bg-black text-white'
      }`}
    >
      {isSubscribed ? 'Subscribed' : 'Subscribe'}
    </button>
  );
}