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
  //select random phone
  const [selectedPhone,setSelectedPhone]=useState([]);
  
  const randomSelect =(cart)=>{
       
       const winningPhone=cart[Math.floor (Math.random() * cart.length)];
       setSelectedPhone(winningPhone);
     }
     console.log(selectedPhone);
//remove all
     const [removePhone,setRemovePhone]=useState([]);
    const chooseAgain=(cart)=>{
      const emptyCart=cart.splice(0);
      setRemovePhone(emptyCart);
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
   
      <button onClick={()=>randomSelect(cart)} className='select-btn'><p>Choose one</p></button>
      <button onClick={()=>chooseAgain(cart)} className='select-btn'><p>Chose Again</p></button>
      <WinningPhone selectedPhone={selectedPhone}></WinningPhone>
      </div>
    </div>
  );
};

export default Phones;