import React from 'react';

const About = () => {
  const values = [
    { 
      title: 'Kualitas', 
      desc: 'Kami mempertahankan standar tertinggi dalam segala hal yang kami lakukan.' 
    },
    { 
      title: 'Inovasi', 
      desc: 'Terus meningkatkan dan beradaptasi dengan teknologi baru.' 
    },
    { 
      title: 'Integritas', 
      desc: 'Jujur dan transparan dalam semua urusan kita.' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-600">
          Tentang Kami
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg transform transition duration-500 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Story
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
              Shoes-Clotheszo didirikan dengan visi untuk menyediakan produk dan layanan terbaik bagi pelanggan kami.
                Kami percaya bahwa membangun hubungan jangka panjang dengan pelanggan adalah kunci kesuksesan,
                yang kami wujudkan melalui kepercayaan, kualitas, dan inovasi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan pengalaman bertahun-tahun di industri ini, Shoes-Clotheszo telah berkembang menjadi nama yang terpercaya dalam bidangnya.
                Kami melayani berbagai sektor dengan penuh dedikasi dan keahlian, memastikan setiap produk dan layanan yang kami berikan
                mampu memenuhi kebutuhan serta harapan pelanggan.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg transform transition duration-500 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Values
            </h2>
            <div className="space-y-6">
              {values.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;