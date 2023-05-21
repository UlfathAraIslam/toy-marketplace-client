import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Toy = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/toys/{id}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!toy) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={imageUrl} alt="Toy" /></figure>
      <div className="card-body">
        <h2 className="card-title">Toy name: {data.subcategory.name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;
