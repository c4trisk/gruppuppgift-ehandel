import React from 'react'
import useFetch from './useFetch'
import ProductCard from './ProductCard'
import SizedProductCard from './SizedProductCard'
import TextCard from './TextCard'

const SaleHomepage = () => {

  const { data: product } = useFetch('http://localhost:9999/api/products/645e1ddb29613d90413b7b9f')
  const { data: product2 } = useFetch('http://localhost:9999/api/products/645e1a664dcb1354d3c86307')

  return (
    <div className='SaleHomepage'>
      <div className="container">
        {
          product && <SizedProductCard key={product._id} product={product} width={'369px'} height={'310px'} />
        }
        <TextCard />
        {
          product2 && <SizedProductCard key={product2._id} product={product2} width={'369px'} height={'310px'} />
        }

      </div>
    </div>
  )
}

export default SaleHomepage