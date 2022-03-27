import React from 'react';
import WinningPhone from '../../WinningPhone/WinningPhone';
import './Cart.css';

const Cart = (props) => {
  const winningPhone =props.selectedPhone;
const cart=props.phoneInfo;

  return (
    <div >
      <div className='cart'>
      <img src={cart.picture} alt="" />
     <h3>{cart.name}</h3>
      </div>
    
     
    </div>
  );
};

export default Cart;