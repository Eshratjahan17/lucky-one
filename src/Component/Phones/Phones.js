import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import Cart from './Cart/Cart';
import './Phones.css';

const Phones = () => {
  const [phones,setPhones]=useState([]);
  useEffect(()=>{
    fetch('phones.json')
    .then(res => res.json())
    .then(data =>setPhones(data) )
  },[]);

  const [cart,setCart]=useState([]);
 const addToCart =(phone)=>{
   const  newCart =[...cart,phone];
   setCart(newCart);
 }
  
  return (
   
    <div className='container'>
      <div className="phones-container">
      {
        phones.map(phone =><Phone 
          addToCart={addToCart}
          key={phone.id}
          phone={phone}
        ></Phone>
         
        )
      }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Phones;