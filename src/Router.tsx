import { Routes, Route } from "react-router-dom";
import { Supplier } from "./pages/Supplier";
import Home from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductDetails } from "./pages/ProductDetails";
import { SupplierDetails } from "./pages/SupplierDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/fornecedor" element={<Supplier />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/fornecedor/:id" element={<SupplierDetails />} />
    </Routes>
  );
}
