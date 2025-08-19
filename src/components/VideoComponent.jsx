import React from 'react';

const VideoComponent = ({ scrollY, isScrolled }) => {
  const videoTransform = isScrolled 
    ? 'translateX(0) scale(0.45)' 
    : 'translateX(-50%) translateY(-50%) scale(1)';

  return (
    <div 
      className={`fixed video-transition ${
        isScrolled 
          ? 'top-8 left-4 w-96 h-64 z-20' 
          : 'top-1/2 left-1/2 w-[calc(100vw-60px)] h-[calc(100vh-140px)] z-10'
      }`}
      style={{
        transform: videoTransform,
        transformOrigin: isScrolled ? 'top left' : 'center center',
        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
        {/* Actual Video */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-studio-3445-large.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/30">
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
            <div className="max-w-lg">
              <h2 className={`font-light mb-4 tracking-wide ${isScrolled ? 'text-xl' : 'text-3xl sm:text-4xl lg:text-6xl'} transition-all duration-500`}>
                Discover Luxury
              </h2>
              {!isScrolled && (
                <div className="animate-fade-in">
                  <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6">
                    Curated Fashion for the Modern Soul
                  </p>
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white/30 transition-all duration-300 text-white font-medium text-sm sm:text-base">
                    Explore Collection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;