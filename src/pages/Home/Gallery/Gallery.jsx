// import React from 'react';

// const Gallery = () => {
//     const images = [
//         'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full bg-opacity-0',
//         'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full bg-opacity-0',
//         'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full bg-opacity-0',
//         'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full bg-opacity-0',
//         'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full bg-opacity-0',
//         'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full bg-opacity-0',
//     ];

//     return (
//         <div className='mt-20'>
//             <h3 className='text-center text-4xl mb-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text'>Enjoy seeing</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {images.map((imageUrl, index) => (
//                     <div key={index} className="relative overflow-hidden">
//                         <img src={imageUrl} alt={`Image ${index}`} className="w-full h-auto transition duration-300 transform hover:scale-105 hover:opacity-75" />
//                         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
//                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple text-center opacity-50 transition-opacity duration-300 hover:opacity-100">
//                             <p className="text-lg font-bold">Toy {index + 1}</p>
//                             <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline text-purple-500">View Image</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Gallery;

import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  return (
    <div className="mt-20">
      <h3 className="text-center text-4xl mb-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
        Enjoy seeing
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((imageUrl, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            whileHover={{ scale: 1.05, opacity: 0.75 }}
          >
            <motion.img
              src={imageUrl}
              alt={`Image ${index}`}
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple text-center opacity-50 transition-opacity duration-300 hover:opacity-100">
              <p className="text-lg font-bold">Toy {index + 1}</p>
              <a
                href={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline font-bold text-purple-500"
              >
                View Image
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

