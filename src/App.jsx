import { useState } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BestSellingSection from './components/BestSellingSection';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAnimationComplete = () => {
    setIsLoaded(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Loading Animation with permanent logo */}
      <LoadingAnimation onAnimationComplete={handleAnimationComplete} />
      
      {/* Navigation */}
      <Navigation isVisible={isLoaded} />
      
      {/* Main Content */}
      {isLoaded && (
        <main className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <HeroSection isVisible={true} />
          <BestSellingSection isVisible={true} />
        </main>
      )}
    </div>
  );
}

export default App;