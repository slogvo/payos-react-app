import { Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import PDF from "@/pages/PDF";
import Checkout from "@/pages/Checkout";
import CheckoutSuccess from "@/pages/CheckoutSuccess";
import NotFound from "@/pages/NotFound";
import Test from "@/pages/admin/test";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/pdf" element={<PDF />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/admin/test" element={<Test />} />
    <Route path="/checkout/success" element={<CheckoutSuccess />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
