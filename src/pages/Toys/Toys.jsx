import React, { useEffect, useState } from 'react';

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
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
            <tr key={toy.id}>
              <td className="py-2 px-4 border-b">{toy.seller.name}</td>
              <td className="py-2 px-4 border-b">{toy.toy_name}</td>
              <td className="py-2 px-4 border-b">{toy.category}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.available_quantity}</td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Toys;
