

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import logo from "../assets/img/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showAuth, setShowAuth] = useState(false); // login/signup popup

  // Regular nav link style
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-red-500 text-white px-6 py-2 rounded-full font-medium transition-colors"
      : "bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors";

  return (
    <>
      <nav className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-12 object-cover rounded-full"
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/pages/browsermenu" className={linkClass}>Browse Menu</NavLink>
            {/* <NavLink to="/menu" className={linkClass}>Special Offers</NavLink> */}
            <NavLink to="/track-order" className={linkClass}>Track Order</NavLink>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setShowAuth(true)}
              className="text-red px-6 py-2 rounded-full flex items-center gap-2 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Login / Signup</span>
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-2 flex flex-col items-start">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/pages/browsermenu" className={linkClass} onClick={() => setIsOpen(false)}>Browse Menu</NavLink>
            {/* <NavLink to="/menu" className={linkClass} onClick={() => setIsOpen(false)}>Special Offers</NavLink> */}
            <NavLink to="/track-order" className={linkClass} onClick={() => setIsOpen(false)}>Track Order</NavLink>

            {/* Mobile Login Button */}
            <button
              onClick={() => setShowAuth(true)}
              className="w-full text-red px-6 py-2 rounded-full flex items-center gap-2 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Login / Signup</span>
            </button>
          </div>
        )}
      </nav>

      {/* Login/Signup Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">Login / Signup</h2>

            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
              <input type="password" placeholder="Password" className="w-full border rounded-lg px-4 py-2" />
              <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
                Login
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <button className="text-red-500 hover:underline">Signup</button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
