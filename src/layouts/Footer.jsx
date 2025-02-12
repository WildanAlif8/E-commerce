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
          <div className="flex flex-col space-y-4">
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