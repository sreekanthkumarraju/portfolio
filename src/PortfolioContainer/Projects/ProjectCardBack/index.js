import React from 'react'
import './style.css';

const CardBack = ({  description }) => {
  return ( 
    <div className="back">
       <h5 className='heading'> Summary </h5>
        <p> { description } </p>
    </div>
    );
}
  
export default CardBack;