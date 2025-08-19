// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
  },
  PRODUCTS: {
    GET_ALL: '/products',
    GET_BY_ID: '/products',
    CREATE: '/products',
    UPDATE: '/products',
    DELETE: '/products',
  },
  WISHLIST: {
    GET: '/wishlist',
    ADD: '/wishlist',
    REMOVE: '/wishlist',
  },
  CART: {
    GET: '/cart',
    ADD: '/cart',
    UPDATE: '/cart',
    REMOVE: '/cart',
  },
};

// Product categories
export const CATEGORIES = [
  { id: 1, name: 'Electronics', emoji: '📱' },
  { id: 2, name: 'Fashion', emoji: '👗' },
  { id: 3, name: 'Home & Garden', emoji: '🏡' },
  { id: 4, name: 'Sports', emoji: '⚽' },
  { id: 5, name: 'Books', emoji: '📚' },
  { id: 6, name: 'Beauty', emoji: '💄' },
];

// Animation durations
export const ANIMATION_DURATIONS = {
  FAST: 200,
  MEDIUM: 300,
  SLOW: 500,
  EXTRA_SLOW: 1000,
};

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
};