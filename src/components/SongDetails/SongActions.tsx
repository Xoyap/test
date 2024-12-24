import React from 'react';
import { Heart, Share2, Download, ListPlus } from 'lucide-react';
import { RetroButton } from '../ui/RetroButton';

export const SongActions: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <RetroButton 
      icon={Heart} 
      label="LIKE" 
      onClick={() => {}} 
      className="p-2"
    />
    <RetroButton 
      icon={ListPlus} 
      label="PLAYLIST" 
      onClick={() => {}} 
      className="p-2"
    />
    <RetroButton 
      icon={Share2} 
      label="SHARE" 
      onClick={() => {}} 
      className="p-2"
    />
    <RetroButton 
      icon={Download} 
      label="DOWNLOAD" 
      onClick={() => {}} 
      className="p-2"
    />
  </div>
);