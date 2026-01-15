import React, { useState } from "react";

function CheckoutPage() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input
        placeholder="Full Name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutPage;
