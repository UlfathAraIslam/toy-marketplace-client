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

// import React, { useState } from 'react';

// const AddAToy = () => {
//   const [pictureUrl, setPictureUrl] = useState('');
//   const [name, setName] = useState('');
//   const [sellerName, setSellerName] = useState('');
//   const [sellerEmail, setSellerEmail] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [rating, setRating] = useState('');
//   const [availableQuantity, setAvailableQuantity] = useState('');
//   const [detailDescription, setDetailDescription] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform the desired actions with the form data (e.g., submit to a server, update state, etc.)
//     // Add your logic here
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-4">Add A Toy</h2>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="pictureUrl" className="block text-sm font-medium text-gray-700">
//             Picture URL of the toy:
//           </label>
//           <input
//             type="text"
//             id="pictureUrl"
//             value={pictureUrl}
//             onChange={(e) => setPictureUrl(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sellerName" className="block text-sm font-medium text-gray-700">
//             Seller Name:
//           </label>
//           <input
//             type="text"
//             id="sellerName"
//             value={sellerName}
//             onChange={(e) => setSellerName(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sellerEmail" className="block text-sm font-medium text-gray-700">
//             Seller Email:
//           </label>
//           <input
//             type="text"
//             id="sellerEmail"
//             value={sellerEmail}
//             onChange={(e) => setSellerEmail(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
//             Sub-category:
//           </label>
//           <input
//             type="text"
//             id="subcategory"
//             value={subcategory}
//             onChange={(e) => setSubcategory(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//             Price:
//           </label>
//           <input
//             type="text"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
//             Rating:
//           </label>
//           <input
//             type="text"
//             id="rating"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="availableQuantity" className="block text-sm font-medium text-gray-700">
//             Available Quantity:
//           </label>
//           <input
//             type="text"
//             id="availableQuantity"
//             value={availableQuantity}
//             onChange={(e) => setAvailableQuantity(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="detailDescription" className="block text-sm font-medium text-gray-700">
//             Detail Description:
//           </label>
//           <textarea
//             id="detailDescription"
//             value={detailDescription}
//             onChange={(e) => setDetailDescription(e.target.value)}
//             className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn bg-purple-300 text-white font-bold py-2 px-4 rounded"
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddAToy;
