import React, { useEffect, useState } from 'react';


const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])


    return (
        <div>
            <div>
                <h3 className='text-4xl text-center'>All Toys: {toys.length}</h3>
            </div>
        </div>
    );
};

export default Toys;