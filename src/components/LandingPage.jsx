import { useState, useEffect } from "react";
import HomePage from "./HomePage";

const LandingPage = ({ onAnimationComplete }) => {
  const [animationPhase, setAnimationPhase] = useState("initial");

  useEffect(() => {
    // Start upward movement after 1 second
    const timer1 = setTimeout(() => {
      setAnimationPhase("moving");
    }, 1000);

    // Complete animation after 4 seconds
    const timer2 = setTimeout(() => {
      setAnimationPhase("complete");
      // Notify parent that animation is complete
      setTimeout(() => {
        onAnimationComplete();
      }, 500);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Animated MoonLoom Text - Always visible */}
      <div
        className={`fixed font-light tracking-widest will-change-transform text-black transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-50
          ${
            animationPhase === "initial"
              ? "text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[10rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              : "text-xl sm:text-2xl md:text-3xl lg:text-4xl top-8 left-1/2 -translate-x-1/2"
          }`}
      >
        MoonLoom
      </div>

      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 opacity-30"></div>

      {/* Decorative elements during animation */}
      {animationPhase === "moving" && (
        <>
          <div className="absolute top-16 sm:top-20 left-8 sm:left-12 w-0.5 h-12 sm:h-16 bg-black opacity-20 animate-fadeIn"></div>
          <div className="absolute top-16 sm:top-20 right-8 sm:right-12 w-0.5 h-12 sm:h-16 bg-black opacity-20 animate-fadeIn"></div>
          <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-0.5 bg-black opacity-25 animate-fadeIn"></div>

          {/* Loading dots */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-1.5 h-1.5 bg-black opacity-30 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-black opacity-30 rounded-full animate-pulse delay-200"></div>
            <div className="w-1.5 h-1.5 bg-black opacity-30 rounded-full animate-pulse delay-400"></div>
          </div>
        </>
      )}

      {/* HomePage slides up from bottom after animation completes */}
      {animationPhase === "complete" && (
        <div className="fixed inset-0 z-40">
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default LandingPage;