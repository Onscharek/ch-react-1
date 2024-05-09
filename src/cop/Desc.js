import React from 'react'
import Product from './Product'



function Desc() {
  return (
    <div>
      {/* <h2>{Product.name}</h2> */}
      <p>{Product.description}</p>
      {/* <p>Price: ${Product.price}</p> */}
      
    </div>
  );
}

export default Desc;