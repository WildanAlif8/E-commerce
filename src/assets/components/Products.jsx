import React, { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: "Crocs Stomp Unisex Slide - Black", image: "https://down-id.img.susercontent.com/file/id-11134201-7rasl-m52phq99kpc0e3@resize_w900_nl.webp", color: "Black", price: "Rp.1.300.000" },
    { name: "On Running Cloudtilt Pearl Ice", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m5ayveahlima88@resize_w900_nl.webp  ", color: "White", price: "Rp3.700.000" },
    { name: "New Balance 1906L Silver Metallic Black", image: "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m5uyp8g0bafse3@resize_w900_nl.webp", color: "Silver", price: "Rp4.100.000" },
    { name: "Dr. Martens Core 1460 Unisex Boots - Black Smooth", image: "https://down-id.img.susercontent.com/file/id-11134201-7rasg-m4zshk554fx964@resize_w900_nl.webp", color: "Black", price: "Rp3.800.000" },
    { name: "New Balance 550 White Green", image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lpewa0dfujdaf4@resize_w900_nl.webp", color: "White", price: "Rp2.500.000" },
    { name: "NIKE Sepatu Sneakers Pria AIR JORDAN 1 ", image: "https://down-id.img.susercontent.com/file/id-11134201-7rasl-m5u2t43ou71272@resize_w900_nl.webp", color: "White", price: "Rp1.900.000" },
    { name: "ADIDAS Sepatu Sneakers SAMBA", image: "https://down-id.img.susercontent.com/file/id-11134201-7ras8-m5u1p86o4o3q9d@resize_w900_nl.webp", color: "Black", price: "Rp2.200.000" },
    { name: "Mills Sepatu Lari Running", image: "https://down-id.img.susercontent.com/file/sg-11134201-7rff4-m34eudu39ayjcf@resize_w900_nl.webp", color: "Tosca / Orange / White ", price: "Rp649.000" },
    { name: "FERGUS BLACK Sepatu Kulit", image: "https://down-id.img.susercontent.com/file/sg-11134201-7qvd6-lgdhytght5og6e@resize_w900_nl.webp", color: "Black ", price: "Rp2.156.000" },
    { name: "Dr. Martens Audrick Loafer Women's Boots", image: "https://down-id.img.susercontent.com/file/id-11134201-7rasd-m4zsgbgoi9vm86.webp", color: "Black ", price: "Rp2.200.000" },
    { name: "Crocs Stomp Unisex Loafer - Linen Black", image: "https://down-id.img.susercontent.com/file/id-11134201-7rask-m52phmcva5jsad@resize_w900_nl.webp", color: "White ", price: "Rp1.600.000" },
    { name: "Salomon XT-6 Black Portabella", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m5l9v2pemx3q26@resize_w900_nl.webp", color: "Black", price: "Rp3.200.000" }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto flex justify-center mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full max-w-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <section className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Pelanggan juga membeli</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setSelectedProduct(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-3 text-gray-800">{product.name}</h3>
                <p className="text-gray-500">{product.color}</p>
                <p className="text-blue-600 font-semibold">{product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">Produk tidak ditemukan</p>
          )}
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
            <button 
              className="absolute top-3 right-3 text-2xl font-bold text-gray-700 hover:text-red-600"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button>
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="w-full h-auto max-h-[70vh] object-contain rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{selectedProduct.name}</h3>
            <p className="text-gray-500">{selectedProduct.color}</p>
            <p className="text-blue-600 font-semibold">{selectedProduct.price}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;
