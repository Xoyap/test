import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RetroButtonProps {
  icon?: LucideIcon;
  label?: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export const RetroButton: React.FC<RetroButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  active = false,
  className = ''
}) => (
  <button
    onClick={onClick}
    className={`
      pixel-button
      ${active ? 'bg-green-600' : 'bg-gray-700'}
      ${className}
    `}
  >
    <div className="flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5" />}
      {label && (
        <span className="font-['Press_Start_2P'] text-xs">{label}</span>
      )}
    </div>
  </button>
);