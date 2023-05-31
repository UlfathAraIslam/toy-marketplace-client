import React, { useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [added, setAdded] = useState([]);

    const url = `http://localhost:5000/addedToy?email=${user.email}`;
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>My Toy page</h2>
        </div>
    );
};

export default MyToy;