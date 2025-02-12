import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/6285797460977`;
    window.open(whatsappURL, "_blank");
  };

  const contactInfo = [
    { 
      icon: FaMapMarkerAlt, 
      title: "Alamat", 
      detail: "Cicurug, Kabupaten Sukabumi" 
    },
    { 
      icon: FaEnvelope, 
      title: "Email", 
      detail: "enzhofadhel@gmail.com" 
    },
    { 
      icon: FaPhone, 
      title: "Phone", 
      detail: "+62 857 9746 0977" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-600">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* WhatsApp Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg transform transition duration-500 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Hubungi Kami
            </h2>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 text-white flex items-center justify-center px-6 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-md text-lg space-x-3"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="font-medium">Chat via WhatsApp</span>
            </button>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
              Informasi Kontak
            </h2>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, title, detail }, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <Icon className="text-blue-500 text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-700 font-medium">{title}</h3>
                    <p className="text-gray-600 mt-1">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;