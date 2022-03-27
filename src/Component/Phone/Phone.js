import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Phone.css';

const Phone = (props) => {
  
  const {picture,name,price}=props.phone;
  return (
    <div className='phone-container'>
      <img src={picture} alt="" />
      <div className='phone-info'>
        <h3>{name}</h3>
        <p>Price:${price}</p>

      </div>
      <button onClick={()=>props.addToCart(props.phone)} className='cart-btn'><p>Add To Cart</p>
      <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Phone;