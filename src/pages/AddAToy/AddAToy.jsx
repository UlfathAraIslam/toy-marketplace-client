import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const available_quantity = form.available_quantity.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const toy_name = form.toy_name.value;
    const price = form.price.value;
    const picture = form.picture.value;

    const adding = {
      sellerName: name,
      email,
      available_quantity,
      category,
      rating,
      toy_name,
      price,
      picture
    };

    console.log(adding);

    fetch('https://b7a11-toy-marketplace-server-side-ulfath-ara-islam.vercel.app/toys/addedToy', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adding)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success',
            text: 'Toy added successfully!',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Add a toy</h2>

      <form onSubmit={handleAddToy}>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="sellerEmail"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input type="text" name="toy_name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Picture</span>
            </label>
            <input type="text" name="picture" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input type="text" name="category" className="input input-bordered" />
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
            <input type="text" name="available_quantity" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <input type="text" name="detailDescription" className="input input-bordered" />
          </div>


          <div className="form-control mt-6">
            <input
              className="btn bg-purple-300 text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="Add Toy"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
