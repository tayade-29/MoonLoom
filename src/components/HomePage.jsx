import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Heart, ShoppingBag } from 'lucide-react';
import Navigation from './Navigation';

const HomePage = () => {
  const [showCategories, setShowCategories] = useState(false);
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Handcrafted Bags",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Jewelry & Accessories",
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const bestSellingItems = [
    {
      id: 1,
      name: "Handwoven Silk Scarf",
      price: "$89",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 2,
      name: "Artisan Leather Bag",
      price: "$245",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 3,
      name: "Silver Handcrafted Ring",
      price: "$125",
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 4,
      name: "Wool Knitted Sweater",
      price: "$178",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 5,
      name: "Ceramic Vase Set",
      price: "$95",
      image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 6,
      name: "Handmade Wooden Bowl",
      price: "$65",
      image: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const handleExploreCategories = () => {
    setShowCategories(true);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-light">
      {/* Header with Navigation */}
      <header className="absolute top-8 left-8 z-50">
        <Navigation />
      </header>

      

      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div 
          className={`transition-all duration-1000 ease-in-out ${
            showCategories ? 'w-1/2' : 'w-full'
          }`}
        >
          {/* Video Container with 30px margin */}
          <div className="m-[30px] relative">
            <div className="relative w-full h-[calc(100vh-60px)] bg-black rounded-lg overflow-hidden">
              {/* Video placeholder - replace with actual video */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Explore Categories Text */}
              {!showCategories && (
                <div 
                  onClick={handleExploreCategories}
                  className="absolute bottom-16 left-8 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3 text-white">
                    <span className="text-lg md:text-xl font-light tracking-wide group-hover:tracking-wider transition-all duration-300">
                      Explore Categories
                    </span>
                    <ChevronRight 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories Grid - Slides in from right */}
        {showCategories && (
          <div className="fixed right-0 top-0 w-1/2 h-screen flex items-center justify-center p-8 animate-slideInRight">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {categories.map((category, index) => (
                <div 
                  key={category.id}
                  className="relative group cursor-pointer border-l-2 border-b-2 border-white hover:border-gray-200 transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: `fadeInUp 0.6s ease-out forwards`
                  }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-light tracking-wide text-sm">
                        {category.name}
                      </span>
                      <ChevronRight 
                        size={16} 
                        className="group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Best Selling Items Section */}
      <div className="py-20 px-8">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16 text-black">
          Best Selling Items
        </h2>
        
        <div className="relative">
          {/* Scroll Left Button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scroll Right Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Items Container */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bestSellingItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-64 group">
                {/* Item Image */}
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Item Details */}
                <div className="space-y-2">
                  <h3 className="font-light tracking-wide text-gray-900 group-hover:text-black transition-colors duration-200">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-black">
                      {item.price}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group/btn">
                        <Heart 
                          size={18} 
                          className="text-gray-600 group-hover/btn:text-red-500 transition-colors duration-200" 
                        />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group/btn">
                        <ShoppingBag 
                          size={18} 
                          className="text-gray-600 group-hover/btn:text-black transition-colors duration-200" 
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;