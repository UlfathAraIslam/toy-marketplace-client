import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                <p>
                    An access token is a short-lived credential that allows a user to access protected resources, while a refresh token is a long-lived credential used to obtain a new access token without reauthentication. Access tokens should be stored securely on the client-side to make authenticated requests.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Compare SQL and NoSQL databases?</h3>
                <p>
                    SQL databases use structured, tabular data with predefined schemas, while NoSQL databases use flexible, unstructured data models without fixed schemas.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">What is Express.js? What is NestJS?</h3>
                <p>
                    Express.js is a minimal and flexible web application framework for Node.js that provides a set of features for building web applications and APIs, handling HTTP requests and responses, routing, and middleware support.
                </p>
                <p>
                    NestJS is a progressive and opinionated Node.js framework for building scalable and efficient server-side applications. It combines the best features of Angular (a popular frontend framework) with the power of Node.js to provide a robust and modular architecture for building server-side applications using TypeScript or JavaScript.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-2">What is MongoDB aggregate and how does it work?</h3>
                <p>
                    In MongoDB, the aggregate function is used to perform advanced data processing and analysis tasks on the data stored in the database. It allows you to perform complex operations, such as grouping, filtering, sorting, and transforming data, by using a pipeline of stages that define the sequence of operations to be applied to the data. Each stage in the pipeline modifies the data in some way, and the result of one stage is passed as input to the next stage, allowing you to perform powerful data aggregations and computations in a single query.
                </p>
            </div>
        </div>
    );
};

export default Blog;
