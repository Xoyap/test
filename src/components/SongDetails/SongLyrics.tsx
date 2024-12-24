import React from 'react';
import { RetroText } from '../ui/RetroText';

interface SongLyricsProps {
  songId: string;
}

export const SongLyrics: React.FC<SongLyricsProps> = () => (
  <div className="pixel-border bg-gray-800 p-4">
    <RetroText variant="small" className="text-green-400 mb-4">
      LYRICS
    </RetroText>
    <div className="space-y-4 text-white font-mono">
      <p>[Verse 1]</p>
      <p>In the digital realm where pixels dance</p>
      <p>Through scanlines and waves, we take our chance</p>
      <p>8-bit dreams in a neon light</p>
      <p>Retro feelings make everything right</p>
    </div>
  </div>
);