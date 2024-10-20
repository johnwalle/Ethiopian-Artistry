import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col md:flex-row">
      

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-yellow-800 text-center mb-6">
            Forgot Your Password?
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Enter your email below and we’ll send you instructions to reset your password.
          </p>

          {/* Forgot Password Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-800 text-white py-3 rounded-lg hover:bg-yellow-700 transition duration-200"
            >
              Send Reset Instructions
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Remembered your password?{' '}
            <a href="/signin" className="text-yellow-700 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
