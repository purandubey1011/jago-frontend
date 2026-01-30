import React from "react";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6">🎉 Payment Successful!</h1>
        <p className="text-gray-700 mb-8">
          Thank you for your payment. Your booking has been confirmed successfully.
        </p>
        <a
          href="/"
          className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default Success;
