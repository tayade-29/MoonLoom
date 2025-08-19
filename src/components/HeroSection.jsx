import { useState } from 'react';

const HeroSection = ({ isVisible }) => {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    { 
      name: 'Women\'s Fashion', 
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800' 
    },
    { 
      name: 'Men\'s Fashion', 
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800' 
    },
    { 
      name: 'Accessories', 
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800' 
    },
    { 
      name: 'Jewelry', 
      image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=800' 
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="pt-24 px-8 min-h-screen">
      <div className="flex h-[calc(100vh-6rem)]">
        {/* Video Section */}
        <div className={`relative transition-all duration-800 ease-out ${
          showCategories ? 'w-1/2' : 'w-full'
        }`}>
          <div className="relative h-full bg-black rounded-lg overflow-hidden" style={{ margin: '30px' }}>
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            <div className="absolute bottom-10 left-10">
              <button 
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center space-x-3 text-white hover:opacity-80 transition-opacity group"
              >
                <span className="dior-font text-xl font-medium">Explore Categories</span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${showCategories ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        {showCategories && (
          <div className="w-1/2 p-8 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6 h-full">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden cursor-pointer 
                             hover:scale-105 transition-transform duration-300 group
                             border-l-2 border-b-2 border-white shadow-lg"
                >
                  <div className="relative h-full">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 
                                    transition-all duration-300"></div>
                    <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                      <span className="dior-font text-white text-lg font-medium">
                        {category.name}
                      </span>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;