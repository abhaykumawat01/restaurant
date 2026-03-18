import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-red-500">
            Foodies
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/menu" className="hover:text-red-500">Menu</Link>
            <Link to="/booking" className="hover:text-red-500">Table Booking</Link>
            <Link to="/about" className="hover:text-red-500">About Us</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link to="/login" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 text-2xl"
            >
              ☰
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4 text-gray-700 font-medium">

            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/menu" className="hover:text-red-500">Menu</Link>
            <Link to="/booking" className="hover:text-red-500">Table Booking</Link>
            <Link to="/about" className="hover:text-red-500">About Us</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-28 hover:bg-red-600">
              Login
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;