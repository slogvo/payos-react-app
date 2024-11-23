import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/assets/data/products";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: { product, size: selectedSize },
    });

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="sticky top-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 text-lg mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-bold text-red-600">
                {product.price.toLocaleString("vi-VN")}₫
              </span>
              <span className="text-lg text-gray-500 line-through">
                {product.originalPrice.toLocaleString("vi-VN")}₫
              </span>
            </div>

            <div className="space-y-4">
              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {[39, 40, 41, 42, 43, 44].map((size) => (
                    <button
                      key={size}
                      className={`py-2 border rounded transition duration-300 ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "hover:border-black"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
