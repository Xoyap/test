export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  albumArt: string;
  audioUrl: string;
  duration: number;
  genre?: string;
  releaseDate?: string;
  lyrics?: string;
}

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
  sprite: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  sprite: string;
  unlocked: boolean;
}