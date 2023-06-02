import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-ulfath-ara-islam.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error));
    }, []);

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
                    className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${activeTab === 1 ? ' bg-purple-300  text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange(1)}
                >
                    Construction
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 2 ? ' bg-purple-300  text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange(2)}
                >
                    Language
                </button>
                <button
                    className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${activeTab === 3 ? ' bg-purple-300  text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange(3)}
                >
                    Science
                </button>
            </div>
            <div className="mt-4">
                
            </div>
        </div>
    );
};

export default ShopByCategory;


/* 
{toys.length > 0 && (
                    <>
                        {activeTab === 1 && (
                            <div className="flex justify-center flex-col sm:flex-row gap-4">
                                
                                    <div className="card card-side bg-base-100 shadow-xl" key={index}>
                                        <figure><img src={toy.image} alt="Toy" /></figure>
                                        <div className="card-body">
                                            <h2>Name: {toy.name}</h2>
                                            <p>Price: {toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                            <div className="card-actions justify-end">
                                                <Link to='/toy/:id'><button className="btn btn-outline bg-purple-200">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className="flex justify-center flex-col sm:flex-row gap-4">
                                {toys[1].subcategory.map((toy, index) => (
                                    <div className="card card-side bg-base-100 shadow-xl" key={index}>
                                        <figure><img src={toy.image} alt="Toy" /></figure>
                                        <div className="card-body">
                                            <h2>Name: {toy.name}</h2>
                                            <p>Price: {toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                            <div className="card-actions justify-end">
                                            <Link to='/toy/:id'><button className="btn btn-outline bg-purple-200">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div className="flex justify-center flex-col sm:flex-row gap-4">
                                {toys[2].subcategory.map((toy, index) => (
                                    <div className="card card-side bg-base-100 shadow-xl" key={index}>
                                        <figure><img src={toy.image} alt="Toy" /></figure>
                                        <div className="card-body">
                                            <h2>Name: {toy.name}</h2>
                                            <p>Price: {toy.price}</p>
                                            <p>Rating: {toy.rating}</p>
                                            <div className="card-actions justify-end">
                                            <Link to='/toy/:id'><button className="btn btn-outline bg-purple-200">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
*/