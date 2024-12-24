import React from 'react';

interface RetroContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const RetroContainer: React.FC<RetroContainerProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`crt-screen pixel-border bg-gray-800 ${className}`}>
    {children}
  </div>
);