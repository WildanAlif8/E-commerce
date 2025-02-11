import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Tentang Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ZaStreet didirikan dengan visi untuk menyediakan produk dan layanan terbaik bagi pelanggan kami.
            Kami percaya bahwa membangun hubungan jangka panjang dengan pelanggan adalah kunci kesuksesan,
            yang kami wujudkan melalui kepercayaan, kualitas, dan inovasi.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dengan pengalaman bertahun-tahun di industri ini, ZaStreet telah berkembang menjadi nama yang terpercaya dalam bidangnya.
            Kami melayani berbagai sektor dengan penuh dedikasi dan keahlian, memastikan setiap produk dan layanan yang kami berikan
            mampu memenuhi kebutuhan serta harapan pelanggan.
          </p>
        </div>
        <div className="bg-gray-100 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="space-y-4">
            {[
              { title: 'Kualitas', desc: 'Kami mempertahankan standar tertinggi dalam segala hal yang kami lakukan.' },
              { title: 'Inovasi', desc: 'Terus meningkatkan dan beradaptasi dengan teknologi baru.' },
              { title: 'Integritas', desc: 'Jujur dan transparan dalam semua urusan kita.' }
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="font-semibold text-gray-700">{item.title}:</span>
                <span className="text-gray-600">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;