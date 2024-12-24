import React from 'react';

interface RetroTextProps {
  children: React.ReactNode;
  variant?: 'title' | 'normal' | 'small';
  className?: string;
  scrolling?: boolean;
}

export const RetroText: React.FC<RetroTextProps> = ({
  children,
  variant = 'normal',
  className = '',
  scrolling = false
}) => {
  const baseStyles = "font-['Press_Start_2P']";
  const variantStyles = {
    title: 'text-lg sm:text-2xl',
    normal: 'text-sm sm:text-base',
    small: 'text-xs sm:text-sm'
  };

  return (
    <div className={`
      ${baseStyles}
      ${variantStyles[variant]}
      ${scrolling ? 'whitespace-nowrap scroll-text' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};