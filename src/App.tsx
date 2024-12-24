import React from 'react';
import { Controls } from './components/Controls';
import { ProgressBar } from './components/ProgressBar';
import { NowPlaying } from './components/NowPlaying';
import { SongList } from './components/SongList/SongList';
import { RetroContainer } from './components/ui/RetroContainer';
import './styles/retro.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-2 sm:p-8">
      <RetroContainer className="w-full max-w-2xl p-3 sm:p-6">
        <h1 className="text-lg sm:text-2xl text-center text-white mb-4 sm:mb-8 font-['Press_Start_2P'] blink">
          RETRO MUSIC PLAYER
        </h1>
        
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <NowPlaying />
            <ProgressBar />
            <Controls />
          </div>
          <SongList />
        </div>
      </RetroContainer>
    </div>
  );
}

export default App;