import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/6285797460977`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-6 shadow-lg rounded-xl w-full max-w-lg mx-auto lg:mx-0 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hubungi Kami</h2>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all shadow-md text-lg"
          >
            Chat via WhatsApp
          </button>
        </div>

        {/* Contact Info Section */}
        <div className="bg-gray-100 p-6 shadow-lg rounded-xl w-full max-w-lg mx-auto lg:mx-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">Informasi Kontak</h2>
          <div className="space-y-4">
            {[
              { icon: FaMapMarkerAlt, title: 'Alamat', detail: 'Cicurug, Kabupaten Sukabumi' },
              { icon: FaEnvelope, title: 'Email', detail: 'enzhofadhel@gmail.com' },
              { icon: FaPhone, title: 'Phone', detail: '+6285797460977' }
            ].map(({ icon: Icon, title, detail }, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Icon className="text-blue-500 text-xl" />
                <h3 className="font-medium text-gray-700 w-24">{title}</h3>
                <p className="text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
