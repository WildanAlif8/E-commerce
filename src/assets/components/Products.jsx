import React, { useState } from 'react';

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      name: 'Basic Tee',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4UQ0eNVDIT4CbIpcKC0iklqLjvN54wpIdA&s',
      color: 'Black',
      price: '$35'
    },
    {
      name: 'Jaket Capung',
      image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98s-lthac4cxip6e12',
      color: 'Black',
      price: 'Rp360.000'
    },
    {
      name: 'Converse High Lylac',
      image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-91731328/no_brand_sepatu_converse_all_star_chuck_taylor_70s_high_lylac_taro_full07_cnfvytq5.jpg',
      color: 'Taro',
      price: 'Rp1.200.000'
    }
  ];

  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
            Customers also purchased
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-white p-4 rounded-lg shadow-md">
                <div
                  className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 cursor-pointer"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-semibold">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl p-4">
            <img src={selectedImage} alt="Zoomed" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;