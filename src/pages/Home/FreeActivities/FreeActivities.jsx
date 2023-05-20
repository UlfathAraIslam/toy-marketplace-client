import React from 'react';
import MathGame from './MathGame';

const FreeActivities = () => {
    return (
        <div className="hero mt-10" style={{ backgroundImage: `url("https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-purple-300">Young genius</h1>
                    <p className="mb-5">Enjoy free learning activities for Bangladeshi friends</p>
                    <MathGame></MathGame>
                </div>
            </div>
        </div>
    );
};

export default FreeActivities;