import React from 'react'
import Product from './Product'



const Img = () => {
  return (
    <div className='img'>
     <img src={Product.imageURL} alt={Product.name} />

    </div>
  )
}

export default Img