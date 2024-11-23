import { products } from "@/assets/data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center bg-[url('https://via.placeholder.com/1920x1080')]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Style
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore our collection of premium footwear
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-black hover:text-white transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition duration-300 ${
                category === selectedCategory
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-black hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-1 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">
                    {product.price.toLocaleString("vi-VN")}₫
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice.toLocaleString("vi-VN")}₫
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
