import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Pengembangan Produk",
      description: "Solusi khusus yang disesuaikan dengan kebutuhan dan kebutuhan spesifik Anda",
      icon: "📦"
    },
    {
      title: "Konsultasi",
      description: "Saran dan bimbingan ahli untuk pertumbuhan bisnis Anda",
      icon: "💡"
    },
    {
      title: "Support",
      description: "24/7 dukungan teknis dan layanan pemeliharaan",
      icon: "🛠️"
    },
    {
      title: "Training",
      description: "Comprehensive training programs for your team",
      icon: "📚"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
