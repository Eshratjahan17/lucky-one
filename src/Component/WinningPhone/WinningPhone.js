import React from 'react';
import './WinningPhone.css';

const WinningPhone = (props) => {
  const winningPhone =props.selectedPhone;
  console.log(winningPhone.name);
  return (
    <div className='wining-container'>
      <h2 className='wining-header'>You Won This</h2> 
      <div className='wining-phone' > 
        
      <img src={winningPhone.picture} alt="" />
        <h4>{winningPhone.name}</h4>
       </div>
    </div>
  );
};

export default WinningPhone;