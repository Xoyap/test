import React from 'react';
import { useMusicStore } from '../store/musicStore';
import { RetroText } from './ui/RetroText';
import { PowerUpEffect } from './ui/PowerUpEffect';

export const NowPlaying: React.FC = () => {
  const { currentSong } = useMusicStore();

  if (!currentSong) return null;

  return (
    <div className="pixel-border p-4 bg-gray-800">
      <PowerUpEffect trigger={!!currentSong}>
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
          <img 
            src={currentSong.albumArt} 
            alt={currentSong.title}
            className="pixel-art w-full h-full object-cover"
          />
          <div className="absolute inset-0 pixel-border pointer-events-none"></div>
        </div>
      </PowerUpEffect>
      
      <RetroText scrolling variant="small" className="text-white text-center">
        NOW PLAYING: {currentSong.title} - {currentSong.artist}
      </RetroText>
    </div>
  );
};