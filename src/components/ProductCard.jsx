import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='ProductCard'>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{"$" + product.price}</p>
    </div>
  )
}

export default ProductCard