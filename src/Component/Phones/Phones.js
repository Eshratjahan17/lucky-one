import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import Q_a from '../QA/Q_a';
import WinningPhone from '../WinningPhone/WinningPhone';
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
   if(newCart.length > 4){
    return
   }
   else {
    setCart(newCart);
   }
   
  
 }
  //select random phone
  const [selectedPhone,setSelectedPhone]=useState([]);
  const randomSelect =(cart)=>{
       const winningPhone=cart[Math.floor (Math.random() * cart.length)];
       setSelectedPhone(winningPhone);
     }
     
//remove all
     const [removePhone,setRemovePhone]=useState(true);
    const chooseAgain=(cart)=>{
     
      const emptyCart=cart.splice(0);
      
      // const emptyObject=
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
      <Q_a></Q_a>
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
      
        <WinningPhone 
        selectedPhone={selectedPhone}
        
        ></WinningPhone>
      
      </div>
    </div>
  );
};

export default Phones;