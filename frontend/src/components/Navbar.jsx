import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Exercise Routine</h1>
        <div className="space-x-4">
          <Link to="/signin" className="hover:text-indigo-300">Sign In</Link>
          <Link to="/signup" className="hover:text-indigo-300">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;