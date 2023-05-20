import React from 'react';
import { motion } from 'framer-motion';

const OurGoals = () => {
    const goalVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-4xl mb-10 bg-gradient-to-r from-purple-200 to-indigo-700 text-transparent bg-clip-text">Our Goals</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6"
                        variants={goalVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">Educational Toys</h3>
                        <p className="text-gray-600">
                            We aim to provide educational toys that engage children in fun and interactive learning experiences. Our toys are designed to enhance various skills, including critical thinking, problem-solving, creativity, and more.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6"
                        variants={goalVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">Learning through Play</h3>
                        <p className="text-gray-600">
                            We believe in the power of play as a fundamental way for children to learn and develop. Our toys encourage hands-on exploration and foster a love for learning in an enjoyable and stimulating environment.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6"
                        variants={goalVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">Child Development</h3>
                        <p className="text-gray-600">
                            Our goal is to support the holistic development of children. We carefully curate toys that promote cognitive, physical, social, and emotional growth. We strive to provide a balanced and enriching experience for every child.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurGoals;

