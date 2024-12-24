import React from 'react';
import { useMusicStore } from '../store/musicStore';

export const ProgressBar: React.FC = () => {
  const { progress } = useMusicStore();

  return (
    <div className="pixel-border bg-gray-700 h-8 w-full">
      <div 
        className="h-full bg-green-500 pixel-progress transition-all"
        style={{ width: `${progress * 100}%` }}
      >
        <div className="pixel-segments"></div>
      </div>
    </div>
  );
};