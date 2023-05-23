import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError() || {};

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img
        src="https://media.istockphoto.com/id/1197298104/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF-404-%E3%82%A8%E3%83%A9%E3%83%BC%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AE%E6%A6%82%E5%BF%B5%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%A9%E3%83%83%E3%83%97%E3%83%88%E3%83%83%E3%83%97%E3%81%BE%E3%81%9F%E3%81%AF%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%88%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BFpc.jpg?s=612x612&w=0&k=20&c=ByYJWFvDTSEYAXJUpiTlZoSZ5QO3fUicmXh0sc1PZR4="
        alt="Oops! Page not found."
        className="w-64 h-64"
      />
      <h1 className="text-4xl font-bold mt-5">Oops! Page not found.</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <h2 className="text-2xl font-bold mt-5">
        <span className="text-red-500">Error</span> {status || 400}
      </h2>
      <p className="text-lg">{error?.message}</p>
      <Link to="/" className="mt-5 text-blue-500 hover:underline">
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
