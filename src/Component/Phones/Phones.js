import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import WinningPhone from '../WinningPhone/WinningPhone';
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
//  
  const [selectedPhone,setSelectedPhone]=useState([cart]);
  const randomSelect =(cart)=>{
       const winningPhone=cart[Math.floor (Math.random() * cart.length)];
       setSelectedPhone(winningPhone);
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
      <h2>Selected Phones</h2>  
      {
        cart.map(phoneInfo => <Cart
          key={phoneInfo.id} 
          
          phoneInfo={phoneInfo}
          ></Cart>)
      }
    <WinningPhone selectedPhone={selectedPhone}></WinningPhone>
      <button onClick={()=>randomSelect(cart)} className='select-btn'><p>Choose one</p></button>
      <button className='select-btn'><p>Chose Again</p></button>
      </div>
    </div>
  );
};

export default Phones;