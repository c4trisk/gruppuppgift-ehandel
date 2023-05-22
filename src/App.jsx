import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import ProductDetails from "./pages/ProductDetails"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'

const App = () => {

  return (
    <div>
        <Nav />
        <Routes>
            <Route path="/" element= { <Home/>}/>
            <Route path="/products" element= { <Products />}/>
            <Route path="/products/:id" element= { <ProductDetails/>}/>
            <Route path="/contact" element= { <Contact/>}/>
            <Route path="/login" element= { <Login/>}/>
            <Route path="/registration" element= { <Registration/>}/>
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App