// import React from 'react';

// const ShopByCategory = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default ShopByCategory;

import React, { useState } from 'react';

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className='mt-10'>
            <h3 className="text-center text-4xl mb-10 bg-gradient-to-r from-purple-200 to-indigo-700 text-transparent bg-clip-text">
                Choose by category
            </h3>
            <div className="flex justify-center">
                <button
                    className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${activeTab === 1 ? ' bg-purple-300  text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => handleTabChange(1)}
                >
                    Language Toys
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 2 ? ' bg-purple-300  text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => handleTabChange(2)}
                >
                    Math Toys
                </button>
                <button
                    className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${activeTab === 3 ? ' bg-purple-300  text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => handleTabChange(3)}
                >
                    Science Toys
                </button>
            </div>
            <div className="mt-4">
                {activeTab === 1 && (
                    <div className="flex justify-center flex-col sm:flex-row gap-4">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=" alt="Movie" /></figure>
                            <div className="card-body">
                            <h2>Name:1 </h2>
                            <p>Price: </p>
                            <p>rating: </p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-outline bg-purple-200">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=" alt="Movie" /></figure>
                            <div className="card-body">
                            <h2>Name:2 </h2>
                            <p>Price: </p>
                            <p>rating: </p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-outline bg-purple-200">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 2 && (
                     <div className="flex justify-center flex-col sm:flex-row gap-4">
                     <div className="card card-side bg-base-100 shadow-xl">
                         <figure><img src="https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=" alt="Movie" /></figure>
                         <div className="card-body">
                         <h2>Name:1 </h2>
                         <p>Price: </p>
                         <p>rating: </p>
                             <div className="card-actions justify-end">
                             <button className="btn btn-outline bg-purple-200">View Details</button>
                             </div>
                         </div>
                     </div>
                     <div className="card card-side bg-base-100 shadow-xl">
                         <figure><img src="https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=" alt="Movie" /></figure>
                         <div className="card-body">
                         <h2>Name:2 </h2>
                         <p>Price: </p>
                         <p>rating: </p>
                             <div className="card-actions justify-end">
                             <button className="btn btn-outline bg-purple-200">View Details</button>
                             </div>
                         </div>
                     </div>
                 </div>
                )}
                {activeTab === 3 && (
                     <div className="flex justify-center flex-col sm:flex-row gap-4">
                     <div className="card card-side bg-base-100 shadow-xl">
                         <figure><img src="https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=" alt="Movie" /></figure>
                         <div className="card-body">
                         <h2>Name:1 </h2>
                         <p>Price: </p>
                         <p>rating: </p>
                             <div className="card-actions justify-end">
                             <button className="btn btn-outline bg-purple-200">View Details</button>
                             </div>
                         </div>
                     </div>
                     <div className="card card-side bg-base-100 shadow-xl">
                         <figure><img src="https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=" alt="Movie" /></figure>
                         <div className="card-body">
                         <h2>Name:2 </h2>
                         <p>Price: </p>
                         <p>rating: </p>
                             <div className="card-actions justify-end">
                             <button className="btn btn-outline bg-purple-200">View Details</button>
                             </div>
                         </div>
                     </div>
                 </div>
                )}
            </div>
        </div>
    );
};

export default ShopByCategory;
