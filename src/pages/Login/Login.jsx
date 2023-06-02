import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const { signIn, signInWithGoogle, signInWithGitHub, user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log('login page location');


     const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        try {
            await signIn(email, password);
        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setError('Invalid email or password.');
                return;

            } else {
                setError('An error occurred. Please try again later.');
                return;
            }
        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));
    };
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
                            <form onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-purple-900 mb-5">Login</button>
                                    <button className="btn bg-purple-900" onClick={handleGoogleSignIn}>Sign in with Google</button>
                                    <br />
                                    <p>Don't have an account? <Link className='text-purple-700' to="/register">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;