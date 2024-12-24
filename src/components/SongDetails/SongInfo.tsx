import React from 'react';
import { Clock, Music2, Calendar } from 'lucide-react';
import { RetroText } from '../ui/RetroText';

interface SongInfoProps {
  song: {
    duration: number;
    genre?: string;
    releaseDate?: string;
  };
}

export const SongInfo: React.FC<SongInfoProps> = ({ song }) => {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pixel-border bg-gray-800 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InfoItem 
          icon={Clock} 
          label="Duration" 
          value={formatDuration(song.duration)} 
        />
        {song.genre && (
          <InfoItem 
            icon={Music2} 
            label="Genre" 
            value={song.genre} 
          />
        )}
        {song.releaseDate && (
          <InfoItem 
            icon={Calendar} 
            label="Released" 
            value={song.releaseDate} 
          />
        )}
      </div>
    </div>
  );
};

const InfoItem: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
}> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="pixel-border w-10 h-10 bg-gray-700 flex items-center justify-center">
      <Icon className="w-5 h-5 text-green-400" />
    </div>
    <div>
      <RetroText variant="small" className="text-gray-400">
        {label}
      </RetroText>
      <RetroText variant="normal" className="text-white">
        {value}
      </RetroText>
    </div>
  </div>
);