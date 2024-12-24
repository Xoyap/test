import React from 'react';
import { RetroText } from '../ui/RetroText';
import { PowerUpEffect } from '../ui/PowerUpEffect';

interface SongHeaderProps {
  song: {
    albumArt: string;
    title: string;
    artist: string;
    album?: string;
  };
}

export const SongHeader: React.FC<SongHeaderProps> = ({ song }) => (
  <div className="space-y-4">
    <PowerUpEffect trigger={true}>
      <div className="relative aspect-square max-w-sm mx-auto">
        <img 
          src={song.albumArt}
          alt={song.title}
          className="w-full h-full object-cover pixel-border"
        />
      </div>
    </PowerUpEffect>
    
    <div className="text-center space-y-2">
      <RetroText variant="title" className="text-white">
        {song.title}
      </RetroText>
      <RetroText variant="normal" className="text-green-400">
        {song.artist}
      </RetroText>
      {song.album && (
        <RetroText variant="small" className="text-gray-400">
          {song.album}
        </RetroText>
      )}
    </div>
  </div>
);