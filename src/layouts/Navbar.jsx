// src/layouts/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Shoes-Clotheszo.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            {/* <Link to="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link> */}
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg border"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}