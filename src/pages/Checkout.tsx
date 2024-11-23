import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

interface CheckoutForm {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  paymentMethod: "cod" | "bank-transfer";
}

const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [form, setForm] = useState<CheckoutForm>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cod",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the order to your backend
    console.log("Order details:", {
      items: state.items,
      total: state.total,
      customer: form,
    });

    // Clear cart and redirect to success page
    dispatch({ type: "CLEAR_CART" });
    navigate("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.paymentMethod === "cod"}
                  onChange={() => setForm({ ...form, paymentMethod: "cod" })}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="bank-transfer"
                  checked={form.paymentMethod === "bank-transfer"}
                  onChange={() =>
                    setForm({ ...form, paymentMethod: "bank-transfer" })
                  }
                />
                Bank Transfer
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

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
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
