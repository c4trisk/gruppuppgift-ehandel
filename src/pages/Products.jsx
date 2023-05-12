import { useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {

  
  const [products, setProducts] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      const res = await fetch('http://localhost:9999/api/products')
      const data = await res.json()
      console.log(data)
      setProducts(data)
    }

    getProducts()
    // console.log(products)
  }, [])


  return (
    <div>
      <ul>
      { products.map(product => (
            <ProductCard key={product._id} product={product} />
          )) }

      </ul>
      <h1>hello</h1>
      {
        products.length > 1 ? <p>Products finns!</p> : <p>nej</p>
      }
    </div>
  )
}

export default Products