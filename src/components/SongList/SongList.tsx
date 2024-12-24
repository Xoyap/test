import React from 'react';
import { MenuHeader } from './MenuHeader';
import { SongItem } from './SongItem';
import { useMusicStore } from '../../store/musicStore';

export const SongList: React.FC = () => {
  const { currentSong } = useMusicStore();
  
  // Example songs - in a real app, these would come from your store
  const songs = [
    {
      id: '1',
      title: 'Retro Dreams',
      artist: 'Pixel Beats',
      albumArt: 'https://images.unsplash.com/photo-1601676221830-4ec1e4b40325',
      audioUrl: '',
      duration: 180
    },
    {
      id: '2',
      title: '8-Bit Memories',
      artist: 'Chiptune Master',
      albumArt: 'https://images.unsplash.com/photo-1615436574665-72a4bd7c84c4',
      audioUrl: '',
      duration: 210
    },
    {
      id: '3',
      title: 'Game Over',
      artist: 'Console Kings',
      albumArt: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
      audioUrl: '',
      duration: 195
    }
  ];

  return (
    <div className="pixel-border bg-gray-900">
      <MenuHeader />
      <div className="divide-y divide-gray-800">
        {songs.map((song) => (
          <SongItem 
            key={song.id}
            song={song}
            isSelected={currentSong?.id === song.id}
          />
        ))}
      </div>
    </div>
  );
};