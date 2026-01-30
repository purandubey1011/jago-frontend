import React from "react";

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-500 mb-6">❌ Payment Cancelled</h1>
        <p className="text-gray-700 mb-8">
          Your payment was cancelled. You can try again if you want to book the program.
        </p>
        <a
          href="/pricing"
          className="inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Back to Pricing
        </a>
      </div>
    </div>
  );
};

export default Cancel;
