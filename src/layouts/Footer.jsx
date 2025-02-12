import React from 'react';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/', icon: FaHome },
    { name: 'About', href: '/about', icon: FaInfoCircle },
    { name: 'Contact', href: '/contact', icon: FaPhoneAlt },
  ];

  return (
    <footer className="bg-white shadow-sm mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Shoes-Clotheszo.
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-md">
              Your one-stop destination for trendy shoes and fashionable clothes.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Connect With Us
            </h3>
            <a
              href="https://www.instagram.com/enzo_fadhel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="hover:translate-x-1 transition-transform duration-300">
                Instagram
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-sm sm:text-base text-gray-600">
            © {new Date().getFullYear()}{' '}
            <span className="font-medium text-blue-600">Shoes-Clotheszo</span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;