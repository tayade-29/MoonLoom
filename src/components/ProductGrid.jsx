import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import AuthModal from './AuthModal';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock products data - replace with API call
  const mockProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      isWishlisted: false,
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 299.99,
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400',
      isWishlisted: false,
    },
    {
      id: 3,
      name: 'Premium Camera',
      price: 899.99,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      isWishlisted: false,
    },
    {
      id: 4,
      name: 'Luxury Bag',
      price: 459.99,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      isWishlisted: false,
    },
    {
      id: 5,
      name: 'Designer Sunglasses',
      price: 179.99,
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
      isWishlisted: false,
    },
    {
      id: 6,
      name: 'Premium Sneakers',
      price: 249.99,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      isWishlisted: false,
    },
  ];

  useEffect(() => {
    setProducts(mockProducts);
    // Check authentication status
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleWishlist = (productId) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    setProducts(prev => 
      prev.map(product => 
        product.id === productId 
          ? { ...product, isWishlisted: !product.isWishlisted }
          : product
      )
    );
  };

  const handleAddToCart = (productId) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    
    console.log('Adding to cart:', productId);
    // Implement cart functionality
  };

  return (
    <div className="mt-16 px-8 pb-16">
      <h2 className="text-3xl font-luxury font-semibold text-gray-800 mb-8 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onWishlist={handleWishlist}
            onAddToCart={handleAddToCart}
            delay={index * 100}
          />
        ))}
      </div>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
};

export default ProductGrid;