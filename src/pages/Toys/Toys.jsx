import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Toys = () => {
  const [toys, setToys] = useState([]);

  console.log(toys);
  useEffect(() => {
    fetch('https://b7a11-toy-marketplace-server-side-ulfath-ara-islam.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);



  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-4xl text-center">All Toys: {toys.length}</h3>

      <table className="mt-8 w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="py-2 px-4 border-b">{toy.seller.name}</td>
              <td className="py-2 px-4 border-b">{toy.toy_name}</td>
              <td className="py-2 px-4 border-b">{toy.category}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.available_quantity}</td>
              <td className="py-2 px-4 border-b"><Link to={`/toy/${toy._id}`}><button className='bg-purple-200 rounded'>View Details</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Toys;
