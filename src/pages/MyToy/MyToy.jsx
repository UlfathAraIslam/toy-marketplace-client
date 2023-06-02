import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [addedToys, setAddedToys] = useState([]);

    const url = `https://b7a11-toy-marketplace-server-side-ulfath-ara-islam.vercel.app/addedToy?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedToys(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`https://b7a11-toy-marketplace-server-side-ulfath-ara-islam.vercel.app/addedToy/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Success',
                        text: 'Deleted successfully!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                      });
                      const remaining = addedToys.filter(addedToy => addedToy._id !== id);
                      setAddedToys (remaining);
                }
            })
        }
    }

    const handleUpdate = id => {
        fetch(`https://b7a11-toy-marketplace-server-side-ulfath-ara-islam.vercel.app/addedToy/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'updated'})
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Updated successfully!',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                  });
                  const remaining = addedToys.filter(addedToy => addedToy._id !== id);
                  const updated = addedToys.find(addedToy = addedToy._id === id);
                  updated.status = 'Updated';
                  const newAddedToys = [updated, ...remaining];
                  setAddedToys (newAddedToys);
            }
        })
    }
    return (
        <div className="container mx-auto px-4 py-8">
    <h3 className="text-4xl text-center">Your Toys: {addedToys.length}</h3>

    <div className="overflow-x-auto">
        <table className="mt-8 w-full">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Image</th>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Seller</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Price</th>
                    <th className="py-2 px-4 border-b">Rating</th>
                    <th className="py-2 px-4 border-b">Available Quantity</th>
                    <th className="py-2 px-4 border-b">View Details</th>
                    <th className="py-2 px-4 border-b">Update</th>
                    <th className="py-2 px-4 border-b">Delete</th>
                </tr>
            </thead>
            <tbody>
                {addedToys.map((addedToy) => (
                    <tr key={addedToy._id}>
                        <td className="py-2 px-4 border-b">{addedToy?.picture}</td>
                        <td className="py-2 px-4 border-b">{addedToy?.toy_name}</td>
                        <td className="py-2 px-4 border-b">{addedToy.seller?.name}</td>
                        <td className="py-2 px-4 border-b">{addedToy.seller?.email}</td>
                        <td className="py-2 px-4 border-b">{addedToy?.category}</td>
                        <td className="py-2 px-4 border-b">{addedToy?.price}</td>
                        <td className="py-2 px-4 border-b">{addedToy?.rating}</td>
                        <td className="py-2 px-4 border-b">{addedToy?.available_quantity}</td>
                        <td className="py-2 px-4 border-b"><Link to={`/toy/${addedToy._id}`}><button className="bg-purple-200 rounded">View Details</button></Link></td>
                        <td className="py-2 px-4 border-b">
                            <button onClick={()=> handleUpdate(addedToy._id)} className="bg-purple-200 rounded p-2">Update</button>
                        </td>
                        <td className="py-2 px-4 border-b">
                            <button onClick={()=> handleDelete(addedToy._id)} className="bg-purple-200 rounded p-2">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

    );
};

export default MyToy;