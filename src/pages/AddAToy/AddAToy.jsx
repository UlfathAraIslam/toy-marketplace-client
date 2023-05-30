import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const AddAToy = () => {
  const toy = useLoaderData();

  const {user} = useContext(AuthContext);

  // const [toys, setToys] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/toys/')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const handleAddToy = event => {
    event.preventDefault();

    // const form = event.target;
    // const name =form.name.value;
    // const email = user?.email;
    // const adding = {
    //   sellerName: name,
    //   email,
    //   date,
    //   toy: _id,
    //   price: price
    // }
    // console.log(adding);
  }

  fetch('http://localhost:5000/toys/addingToy', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify()
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // if(data.insertedId){
    //   alert('added toy successfully')
    // }
  })

  return (
    <div>
      <h2>Add a toy</h2>
      {/* <h2>Add a toy{toys.length}</h2> */}
            <form onSubmit={handleAddToy}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input type="text" name="sellerName" defaultValue={user?.displayName}  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input type="text" name="sellerEmail" placeholder='email' defaultValue={user?.email} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <input type="text" name="subCategory" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name="rating" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input type="text" name="availableQuantity" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input type="text" name="detailDescription" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className='btn bg-purple-300 text-white font-bold py-2 px-4 rounded' type="submit" value='Add Toy' />
              </div>
            </div>
            </form>
          </div>
  );
};

export default AddAToy;
