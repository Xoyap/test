import React from 'react';
import { RetroText } from '../ui/RetroText';
import { Music } from 'lucide-react';

interface SimilarSongsProps {
  currentSongId: string;
}

export const SimilarSongs: React.FC<SimilarSongsProps> = () => (
  <div className="space-y-3">
    <RetroText variant="small" className="text-green-400">
      SIMILAR TRACKS
    </RetroText>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {[1, 2, 3, 4].map((i) => (
        <button 
          key={i}
          className="pixel-border bg-gray-800 p-2 flex items-center gap-2 hover:bg-gray-700 transition-colors"
        >
          <div className="w-12 h-12 pixel-border bg-gray-700 flex items-center justify-center shrink-0">
            <Music className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-left min-w-0">
            <RetroText variant="small" className="text-white truncate">
              Similar Song {i}
            </RetroText>
            <RetroText variant="small" className="text-gray-400 truncate">
              Artist {i}
            </RetroText>
          </div>
        </button>
      ))}
    </div>
  </div>
);