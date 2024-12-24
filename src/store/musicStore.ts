import { create } from 'zustand';
import { Song, Playlist, Achievement } from '../types/music';

interface MusicState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  playlists: Playlist[];
  achievements: Achievement[];
  listeningTime: number;
  setCurrentSong: (song: Song) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  addAchievement: (achievement: Achievement) => void;
  updateListeningTime: (time: number) => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  currentSong: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  playlists: [],
  achievements: [],
  listeningTime: 0,
  setCurrentSong: (song) => set({ currentSong: song }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
  setProgress: (progress) => set({ progress }),
  addAchievement: (achievement) => 
    set((state) => ({ 
      achievements: [...state.achievements, achievement] 
    })),
  updateListeningTime: (time) => 
    set((state) => ({ 
      listeningTime: state.listeningTime + time 
    })),
}));