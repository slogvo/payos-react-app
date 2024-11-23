import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            SneakerStore
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-gray-600 transition">
              Home
            </Link>
            <Link to="#" className="hover:text-gray-600 transition">
              Collections
            </Link>
            <Link to="#" className="hover:text-gray-600 transition">
              About
            </Link>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
