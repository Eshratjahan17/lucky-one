import React from 'react';

const WinningPhone = (props) => {
  const winningPhone =props.selectedPhone;
  console.log(winningPhone.name);
  return (
    <div>
      <div > 
        <h2>You Won This</h2> 
      <img src={winningPhone.picture} alt="" />
        <h4>{winningPhone.name}</h4>
       </div>
    </div>
  );
};

export default WinningPhone;