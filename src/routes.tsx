import { Route } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import CheckoutSuccess from "@/pages/CheckoutSuccess";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/checkout/success" element={<CheckoutSuccess />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
