import React from 'react';
import './WinningPhone.css';

const WinningPhone = (props) => {
  const winningPhone =props.selectedPhone;
  const removePhone =props.removePhone;
  const winingPhoneDiv=document.getElementById('wining-container');
  
  return (
    <div id='wining-container' className='wining-container'>
      <h2 className='wining-header'>Congratulations !!<br></br><span>You Won This</span></h2> 
      <div className='wining-phone' > 
        
      <img src={winningPhone.picture} alt="" />
        <h4>{winningPhone.name}</h4>
       </div>
  
    </div>
  );
};

export default WinningPhone;