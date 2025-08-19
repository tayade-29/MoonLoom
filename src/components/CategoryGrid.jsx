import React from 'react';

const CategoryGrid = ({ isMobile, isScrolled }) => {
  const categories = [
    {
      id: 1,
      title: "Women's Fashion",
      subtitle: "Elegant & Timeless",
      image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Discover sophisticated women's wear"
    },
    {
      id: 2,
      title: "Men's Collection",
      subtitle: "Modern & Classic",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Contemporary styles for men"
    },
    {
      id: 3,
      title: "Luxury Accessories",
      subtitle: "Premium Quality",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Exquisite accessories collection"
    },
    {
      id: 4,
      title: "Designer Shoes",
      subtitle: "Step in Style",
      image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Footwear for every occasion"
    }
  ];

  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-6 px-4">
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            index={index}
            isMobile={true}
          />
        ))}
      </div>
    );
  }

  return (
    <div 
      className={`fixed top-24 right-8 w-96 transition-all duration-1000 z-30 ${
        isScrolled 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-full pointer-events-none'
      }`}
    >
      <div className="grid grid-cols-1 gap-4 h-[calc(100vh-140px)]">
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            index={index}
            isMobile={false}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({ category, index, isMobile }) => {
  return (
    <div 
      className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
        isMobile ? 'h-64' : 'flex-1'
      }`}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      <div className="relative h-full rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.image})`
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
            <p className="text-sm font-medium text-white/80 mb-1">
              {category.subtitle}
            </p>
            <h3 className={`font-bold mb-2 ${isMobile ? 'text-xl' : 'text-lg'}`}>
              {category.title}
            </h3>
            <p className="text-sm text-white/70 mb-3">
              {category.description}
            </p>
            <button className="inline-flex items-center text-sm font-medium text-white hover:text-orange-200 transition-colors group">
              Explore
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-500" />
      </div>
    </div>
  );
};

export default CategoryGrid;