import {Routes, Route } from "react-router-dom";
import { Fornecedor } from "./pages/Fornecedor";
import Home from "./pages/Home";
import { Product } from "./pages/Product";

export default function Router() {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/fornecedor" element={<Fornecedor />} />
      </Routes>
      )
}