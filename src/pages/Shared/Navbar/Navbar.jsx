import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const navItems = (
    <>
      <li>
        <Link to='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to='/toys'>
          <a>All Toys</a>
        </Link>
      </li>
      <li>
        <Link to='/my-toys'>
          <a>My Toys</a>
        </Link>
      </li>
      <li>
        <Link to='/add-toy/:id'>
          <a>Add a toy</a>
        </Link>
      </li>
      <li>
        <Link to='/blog'>
          <a>Blog</a>
        </Link>
      </li>
    </>
  );

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoUrl(user.photoURL || '');
    }
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className='navbar bg-base-200'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navItems}
          </ul>
        </div>
        <img className='w-10 rounded' src="https://thumbs.dreamstime.com/b/back-rear-view-successful-business-man-sitting-office-chair-point-finger-success-word-doodle-back-rear-view-successful-111836943.jpg" alt="Logo" />
        {user && <img className='w-10 rounded' src={photoUrl} alt={name} />}
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navItems}</ul>
      </div>
      <div className='navbar-end'>
        {user ? (
          <button onClick={handleLogout} className='btn bg-purple-300'>
            Log Out
          </button>
        ) : (
          <Link to='/login'>
            <a className='btn bg-purple-300'>Login</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
