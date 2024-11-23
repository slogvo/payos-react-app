import { BrowserRouter as Router, Routes } from "react-router-dom";

import routes from "./routes";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>{routes}</Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
