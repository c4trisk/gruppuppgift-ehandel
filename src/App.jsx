import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import ProductDetails from "./pages/ProductDetails"

const App = () => {

  // const [products, setProducts] = useState([])

  // useEffect(() => {

  //   const getProducts = async () => {
  //     const res = await fetch('http://localhost:9999/api/products')
  //     const data = await res.json()
  //     console.log(data)
  //     setProducts(data)
  //   }

  //   getProducts()
  //   // console.log(products)
  // }, [])

  return (
    <div>
        {/* Navbar */}
        <Routes>
            <Route path="/" element= { <Home/>}/>
            <Route path="/products" element= { <Products />}/>
            <Route path="/products/:id" element= { <ProductDetails/>}/>
            <Route path="/contact" element= { <Contact/>}/>
            <Route path="/login" element= { <Login/>}/>
            <Route path="/registration" element= { <Registration/>}/>
        </Routes>
    </div>
  )
}

export default App