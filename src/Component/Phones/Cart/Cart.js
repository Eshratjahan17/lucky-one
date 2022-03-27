import React from 'react';

const Cart = (props) => {
const cart =props.cart;
  return (
    <div>
     <h2>Selected Phones</h2>  
     <p>Selected Item:{cart.length}</p>
    </div>
  );
};

export default Cart;