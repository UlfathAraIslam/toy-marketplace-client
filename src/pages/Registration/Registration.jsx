import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Registration = () => {

    const {createUser, user} = useContext(AuthContext);


    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const [submitError, setSubmitError] = useState(null);

    useEffect(() => {
        if (user) {
          navigate('/');
        }
      }, [user, navigate]);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        if (!email || !password) {
            setSubmitError('Please enter both email and password.');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
          }

        createUser(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-purple-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Let Kids play with success.............</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo</span>
                                    </label>
                                    <input type="text" placeholder="photo" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                    
                                    {submitError && <Alert variant="danger" className="mt-3">{submitError}</Alert>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />

                                    {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                                    
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-purple-900 mb-5">Register</button>
                                    <button className="btn bg-purple-900">Sign in with Google</button>
                                    <br />
                                    <p>Already have an account? <Link className='text-purple-700' to="/login">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;