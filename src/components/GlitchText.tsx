
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <span className={`${glitching ? 'animate-pulse' : ''}`}>
        {children}
      </span>
      {glitching && (
        <>
          <span 
            className="absolute inset-0 text-red-500 opacity-70" 
            style={{ transform: 'translate(-2px, 0)' }}
          >
            {children}
          </span>
          <span 
            className="absolute inset-0 text-blue-500 opacity-70" 
            style={{ transform: 'translate(2px, 0)' }}
          >
            {children}
          </span>
        </>
      )}
    </div>
  );
}
