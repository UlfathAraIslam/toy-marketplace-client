import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toy = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {toy_name, seller, price, rating, available_quantity, picture, description } = toy;



  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="card-body flex flex-col md:flex-row">
        <div className="flex">
          <img src={picture} className="mb-4 w-full" />
        </div>

       <div>
       <h2 className="text-2xl font-bold mb-2">{toy_name}</h2>
        <p className="text-gray-600 mb-2">Seller: {seller.name}</p>
        <p className="text-gray-600 mb-2">Seller Email: {seller.email}</p>
        <p className="text-gray-600 mb-2">Price: ${price}</p>
        <p className="text-gray-600 mb-2">Rating: {rating}</p>
        <p className="text-gray-600 mb-2">Available Quantity: {available_quantity}</p>
        <p className="text-gray-600 mb-2">Description: {description}</p>
       </div>
      </div>
    </div>

  );
};

export default Toy;


