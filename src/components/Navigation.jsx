import { useState } from 'react';

const Navigation = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    'What\'s New',
    'Women\'s Fashion', 
    'Men\'s Fashion',
    'Bags',
    'Jewelry & Timepieces',
    'Kids & Baby',
    'Haute Couture',
    'World & Fashion Shows'
  ];

  if (!isVisible) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col space-y-1 hover:opacity-70 transition-opacity"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          {/* Logo Space - kept empty as logo is handled by LoadingAnimation */}
          <div className="w-24"></div>

          {/* Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hover:opacity-70 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-100 px-8 py-4 bg-white animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors dior-font"
                autoFocus
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform">
            <div className="p-6">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 mb-8 hover:opacity-70 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="font-body text-sm">Close</span>
              </button>
              
              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <a href="#" className="dior-font text-lg text-black hover:opacity-70 transition-opacity">
                      {item}
                    </a>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;