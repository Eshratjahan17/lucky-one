import React from 'react';
import './Q_a.css';

const Q_a = () => {
  return (
    <div className='question'>
      <h1>1.Props Vs State :</h1>
      <p>
        <h4>Props: </h4>
        1.Read only
        2.unidirectional
        3.props can not acces from child component
        4.it is mutable
        <h4>State:</h4>
        1.it can be changed
        2.It works asyncronusly
        3.it is immutable
        4.it doesnot make component  reusable

      </p>
      <h1>How useState works?</h1>
      <p>useState is called Hook in react .It is used to handle chnaging states of a component.it has an initial value ,changing state value .it has an update sate value function.initial value is not much necessary</p>
    </div>
  );
};

export default Q_a;