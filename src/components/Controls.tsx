import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useMusicStore } from '../store/musicStore';
import { RetroButton } from './ui/RetroButton';

export const Controls: React.FC = () => {
  const { isPlaying, volume, togglePlay, setVolume } = useMusicStore();

  return (
    <div className="pixel-border p-2 sm:p-4 bg-gray-800">
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
        <RetroButton 
          icon={SkipBack}
          onClick={() => {/* Handle previous */}}
          className="p-3 sm:p-4"
        />
        
        <RetroButton 
          icon={isPlaying ? Pause : Play}
          onClick={togglePlay}
          active={isPlaying}
          className="p-4 sm:p-5 scale-110"
        />
        
        <RetroButton 
          icon={SkipForward}
          onClick={() => {/* Handle next */}}
          className="p-3 sm:p-4"
        />
      </div>
      
      <div className="flex items-center gap-2 px-2">
        <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="pixel-slider w-full"
        />
      </div>
    </div>
  );
};