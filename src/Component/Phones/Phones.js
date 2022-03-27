import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Phones.css';

const Phones = () => {
  const [phones,setPhones]=useState([]);
  useEffect(()=>{
    fetch('phones.json')
    .then(res => res.json())
    .then(data =>setPhones(data) )
  },[]);

  
  
  return (
   
    <div className='container'>
      <div className="phones-container">
      {
        phones.map(phone =><Phone 
          key={phone.id}
          phone={phone}
        ></Phone>
         
        )
      }
      </div>
      <div className="cart-container">
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default Phones;