import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "15px" }}>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}

export default ProductList;
