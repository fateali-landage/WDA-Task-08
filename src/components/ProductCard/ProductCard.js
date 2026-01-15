import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px" }}>
      <img src={product.image} alt={product.title} height="100" loading="lazy" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
