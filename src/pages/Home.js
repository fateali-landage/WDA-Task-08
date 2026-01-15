import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList/ProductList";

function Home() {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return <ProductList products={products} />;
}

export default Home;
