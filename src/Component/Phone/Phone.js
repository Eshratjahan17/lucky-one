import React from 'react';
import './Phone.css';

const Phone = (props) => {
  const {picture,name,price}=props.phone;
  return (
    <div>
      <img src={picture} alt="" />
      <div className='phone-info'>
        <h3>Name:{name}</h3>
        <p>Price:${price}</p>

      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default Phone;