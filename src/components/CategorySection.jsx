// import React from 'react';

// const CategorySection = ({ isVisible }) => {
//   const categories = [
//     {
//       id: 1,
//       name: 'Electronics',
//       image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
//     },
//     {
//       id: 2,
//       name: 'Fashion',
//       image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
//     },
//     {
//       id: 3,
//       name: 'Home & Garden',
//       image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
//     },
//     {
//       id: 4,
//       name: 'Sports',
//       image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400',
//     },
//   ];

//   if (!isVisible) return null;

//   return (
//     <div className="fixed top-24 left-8 w-80 z-30 animate-slideInLeft">
//       <h2 className="text-2xl font-luxury font-semibold mb-6 text-gray-800">
//         Explore Categories
//       </h2>
//       <div className="grid grid-cols-2 gap-4">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//           >
//             <div className="aspect-square">
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
//               <div className="absolute bottom-3 left-3 right-3">
//                 <p className="text-white font-medium text-sm">{category.name}</p>
//               </div>
//               <div className="absolute top-3 right-3">
//                 <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
//                   <span className="text-white text-xs">→</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;