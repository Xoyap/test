import React from 'react';
import { SongHeader } from './SongHeader';
import { PlaybackControls } from './PlaybackControls';
import { SongInfo } from './SongInfo';
import { SongLyrics } from './SongLyrics';
import { SongActions } from './SongActions';
import { SimilarSongs } from './SimilarSongs';
import { RetroContainer } from '../ui/RetroContainer';
import { useMusicStore } from '../../store/musicStore';

export const SongDetailsPage: React.FC = () => {
  const { currentSong } = useMusicStore();

  if (!currentSong) return null;

  return (
    <div className="min-h-screen bg-gray-900 p-2 sm:p-8">
      <RetroContainer className="max-w-2xl mx-auto p-3 sm:p-6 space-y-4">
        <SongHeader song={currentSong} />
        <PlaybackControls />
        <SongInfo song={currentSong} />
        <SongActions />
        <SongLyrics songId={currentSong.id} />
        <SimilarSongs currentSongId={currentSong.id} />
      </RetroContainer>
    </div>
  );
};