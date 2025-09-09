
import { NavLink } from "react-router-dom";
import { User } from "lucide-react"; 
import logo from "../assets/img/logo.png";

const Navbar = () => {
  // Function for regular nav links
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors"
      :  "bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-colors";

  // Function for the “Restaurants” button
  const navButtonClass = ({ isActive }) =>
    isActive
      ? "bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors"
      : "bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-colors";

  return (
    <nav className="bg-white px-4 py-3 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
            <img src={logo} alt="Logo" className="w-10 h-10 object-cover" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
           
          <NavLink to="/browsermenu" className={linkClass}>
            Browse Menu
          </NavLink>

          <NavLink to="/menu" className={linkClass}>
            Special Offers
          </NavLink>

          <NavLink to="/restaurants" className={navButtonClass}>
            Restaurants
          </NavLink>

          <NavLink to="/track-order" className={linkClass}>
            Track Order
          </NavLink>
        </div>

        {/* Login Button */}
        <div className="flex items-center">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <User className="w-4 h-4" />
            <span>Login/Signup</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
