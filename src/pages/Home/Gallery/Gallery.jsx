import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    'https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=',
    'https://media.istockphoto.com/id/1404039939/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E8%89%B2%E3%81%A8%E3%82%8A%E3%81%A9%E3%82%8A%E3%81%AE%E6%9C%A8%E8%A3%BD%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%AE%E3%81%8A%E3%82%82%E3%81%A1%E3%82%83%E3%81%A7%E9%81%8A%E3%81%B6%E6%96%B0%E3%81%97%E3%81%84%E7%94%B7%E3%81%AE%E5%AD%90.jpg?s=612x612&w=0&k=20&c=FPISB9NMr0wWdpp8oJvDP420ZjvmldghFgUkWX2KwOA=',
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

