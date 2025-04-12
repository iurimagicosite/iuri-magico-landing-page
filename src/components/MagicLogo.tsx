
import { useState, useEffect } from 'react';

const MagicLogo = ({ size = 50 }: { size?: number }) => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Magic hat */}
        <path 
          d="M30 65C30 65 35 45 50 45C65 45 70 65 70 65" 
          stroke="#9b87f5" 
          strokeWidth="3" 
          strokeLinecap="round"
          className={animated ? "animate-pulse-glow" : ""}
        />
        <path 
          d="M25 65H75" 
          stroke="#9b87f5" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Magic wand */}
        <path 
          d="M60 50L75 35" 
          stroke="#9b87f5" 
          strokeWidth="3" 
          strokeLinecap="round"
          className={animated ? "animate-pulse-glow" : ""}
        />
        
        {/* Sparkles */}
        <circle 
          cx="80" 
          cy="30" 
          r="3" 
          fill="#9b87f5" 
          className={animated ? "animate-sparkle" : ""}
        />
        <circle 
          cx="70" 
          cy="25" 
          r="2" 
          fill="#9b87f5" 
          className={animated ? "animate-sparkle" : ""}
        />
        <circle 
          cx="85" 
          cy="40" 
          r="2" 
          fill="#9b87f5" 
          className={animated ? "animate-sparkle" : ""}
        />
      </svg>
      {animated && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-magic-primary rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-magic-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-magic-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      )}
    </div>
  );
};

export default MagicLogo;
