import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-4 text-green-500">
          <svg
            className="w-20 h-20 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We'll send you an email with your order
          details.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
