import React from 'react';
import { Music, Star } from 'lucide-react';
import { Song } from '../../types/music';
import { useMusicStore } from '../../store/musicStore';

interface SongItemProps {
  song: Song;
  isSelected: boolean;
}

export const SongItem: React.FC<SongItemProps> = ({ song, isSelected }) => {
  const { setCurrentSong } = useMusicStore();

  return (
    <button 
      onClick={() => setCurrentSong(song)}
      className={`w-full px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 transition-colors ${
        isSelected 
          ? 'bg-green-600 text-white' 
          : 'hover:bg-gray-700 text-gray-300'
      }`}
    >
      <div className="pixel-border w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-gray-800 flex items-center justify-center">
        {isSelected ? (
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
        ) : (
          <Music className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </div>
      <div className="text-left min-w-0">
        <p className="font-['Press_Start_2P'] text-xs sm:text-sm truncate">{song.title}</p>
        <p className="text-xs opacity-75 mt-1 truncate">{song.artist}</p>
      </div>
    </button>
  );
};