import React, { useEffect, useState } from 'react';

interface PowerUpEffectProps {
  children: React.ReactNode;
  trigger: boolean;
}

export const PowerUpEffect: React.FC<PowerUpEffectProps> = ({ children, trigger }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (trigger) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className={animate ? 'powerup' : ''}>
      {children}
    </div>
  );
};