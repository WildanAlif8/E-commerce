import React, { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: "Basic Tee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4UQ0eNVDIT4CbIpcKC0iklqLjvN54wpIdA&s", color: "Black", price: "$35" },
    { name: "Jaket Capung", image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lthac4cxip6e12", color: "Black", price: "Rp360.000" },
    { name: "Sepatu Sneakers", image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/102/MTA-143082947/panarybody_sepatu_pria_fashion_sneakers_pria_sepatu_bintang_sepatu_cowok_tali_sepatu_jaman_now_sneakers_cowok_panarybody_qn3310_full03_ppomrqjf.jpg", color: "Black", price: "Rp1.000.000" },
    { name: "Dr. Martens Core 1460 Unisex Boots - Black Smooth", image: "https://down-id.img.susercontent.com/file/id-11134201-7rasg-m4zshk554fx964@resize_w900_nl.webp", color: "Black", price: "Rp3.800.000" },
    { name: "New Balance 550 White Green", image: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lpewa0dfujdaf4@resize_w900_nl.webp", color: "White", price: "Rp2.500.000" },
    { name: "NIKE Sepatu Sneakers Pria AIR JORDAN 1 ", image: "https://down-id.img.susercontent.com/file/id-11134201-7rasl-m5u2t43ou71272@resize_w900_nl.webp", color: "White", price: "Rp1.900.000" },
    { name: "ADIDAS Sepatu Sneakers SAMBA  ", image: "https://down-id.img.susercontent.com/file/id-11134201-7ras8-m5u1p86o4o3q9d@resize_w900_nl.webp", color: "Black", price: "Rp2.200.000" },
    { name: "Converse High Lylac", image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-91731328/no_brand_sepatu_converse_all_star_chuck_taylor_70s_high_lylac_taro_full07_cnfvytq5.jpg", color: "Taro", price: "Rp1.200.000" }
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
