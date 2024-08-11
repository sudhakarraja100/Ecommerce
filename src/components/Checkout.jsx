import React from 'react';

const Checkout = () => {
  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Thank you for your purchase!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <label>Name:</label>
        <input type="text" required />
        <label>Address:</label>
        <input type="text" required />
        <label>Credit Card:</label>
        <input type="text" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
