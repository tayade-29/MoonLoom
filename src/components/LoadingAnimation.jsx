import { useState, useEffect } from 'react';

const LoadingAnimation = ({ onAnimationComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <h1 
        className="dior-font text-6xl md:text-8xl font-bold text-black animate-logo-float"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(2)',
          zIndex: 100
        }}
      >
        moonloom
      </h1>
    </div>
  );
};

export default LoadingAnimation;