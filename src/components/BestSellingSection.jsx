import { useState } from 'react';

const BestSellingSection = ({ isVisible }) => {
  const products = [
    {
      id: 1,
      name: 'Elegant Silk Dress',
      price: '$299',
      image: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'Luxury Handbag',
      price: '$599',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Designer Sunglasses',
      price: '$249',
      image: 'https://images.pexels.com/photos/1445598/pexels-photo-1445598.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: 'Pearl Necklace',
      price: '$399',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      name: 'Cashmere Scarf',
      price: '$189',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      name: 'Leather Boots',
      price: '$459',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('products-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('products-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="dior-font text-4xl font-bold text-center mb-12 text-black">Best Selling</h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
                     bg-black bg-opacity-20 text-white p-3 rounded-full 
                     hover:bg-opacity-40 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 
                     bg-black bg-opacity-20 text-white p-3 rounded-full 
                     hover:bg-opacity-40 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Products Container */}
        <div 
          id="products-container"
          className="flex space-x-6 overflow-x-auto scroll-container pb-4"
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex-none w-80 bg-white group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="dior-font text-lg font-medium mb-2 text-black">{product.name}</h3>
                  <p className="text-xl font-semibold text-black">{product.price}</p>
                </div>
                
                <div className="flex space-x-3">
                  {/* Wishlist Icon */}
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  
                  {/* Add to Cart Icon */}
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 8L3 3H1m6 10v6a2 2 0 002 2h8a2 2 0 002-2v-6m-3 2h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingSection;