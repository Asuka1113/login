import React from 'react';

const Register = ({ onLoginClick }) => {
  return (
    <div className="bg-white p-8 bg-opacity-45 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4 text-white  text-center">Register</h2>
      <form>
        <div className="mb-4">
        
          <input
            type="email"
            id="registeremail"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
        
          <input
            type="password"
            id="registerpassword"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
        >
          Register
        </button>
        <p
           className="underline text-gray-400 hover:text-gray-500  cursor-pointer mt-2"
           onClick={() => onLoginClick("login")}
        >
          Have an account? Click to log in
        </p>
      </form>
    </div>
  );
};

export default Register;
