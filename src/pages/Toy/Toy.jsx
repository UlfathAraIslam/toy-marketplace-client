import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Toy = () => {
  const toy = useLoaderData();

  // const { id } = useParams();
  // const [toy, setToy] = useState(null);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/toys/${id}`)
  //     .then(res => res.json())
  //     .then(data => setToy(data))
  //     .catch(error => console.error(error));
  // }, [id]);

  // if (!toy) {
  //   return <div>Loading...</div>;
  // }

  const { picture, subcategory, available_quantity, detail_description } = toy;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={picture} alt="Toy" /></figure>
      <div className="card-body">
        {subcategory.map((item, index) => (
          <div key={index}>
            <h2 className="card-title">Toy name: {item.name}</h2>
            <p>Seller: {item.seller}</p>
            <p>Seller email: {item.seller_email}</p>
            <p>Price: {item.price}</p>
            <p>Rating: {item.rating}</p>
            <p>Available quantity: {available_quantity}</p>
            <p>Description: {detail_description}</p>
          </div>
        ))}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;


