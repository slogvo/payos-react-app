import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  const handleQuantityChange = (id: number, size: number, quantity: number) => {
    if (quantity < 1) return;

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, size, quantity },
    });
  };

  const handleRemoveItem = (id: number, size: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id, size },
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-gray-600">Your cart is empty</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="bg-white p-4 rounded-lg shadow flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.size)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm">Size: {item.size}</p>
                  <p className="font-semibold">
                    {item.price.toLocaleString("vi-VN")}₫
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{state.total.toLocaleString("vi-VN")}₫</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 font-bold flex justify-between">
                <span>Total</span>
                <span>{state.total.toLocaleString("vi-VN")}₫</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
