import React from 'react'
import SizedProductCard from './SizedProductCard'
import useFetch from './useFetch'

const TopHomepage = () => {

  const { data: product, isLoading, error } = useFetch('http://localhost:9999/api/products')

  return (
    <div className='TopHomepage'>
        <h2 className='headline'>Top selling products in this week</h2>
      <div className="container">
        {product && product.slice(0, 6).map((product) => (
              <SizedProductCard key={product._id} product={product} width={'270px'} height={'295px'} />
            ))}
      </div>
    </div>
  )
}

export default TopHomepage