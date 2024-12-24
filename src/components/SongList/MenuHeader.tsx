import React from 'react';
import { ListMusic } from 'lucide-react';

export const MenuHeader: React.FC = () => (
  <div className="pixel-border bg-gray-800 p-4 flex items-center gap-3">
    <div className="pixel-border w-10 h-10 bg-blue-600 flex items-center justify-center">
      <ListMusic className="w-6 h-6 text-white" />
    </div>
    <h2 className="font-['Press_Start_2P'] text-white text-sm">SONG SELECT</h2>
  </div>
);