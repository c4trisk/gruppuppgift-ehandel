import React from 'react'
import heroBanner from '../assets/Placeholders/1920x300.svg'
import { FaStar } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useFetch from '../components/useFetch'
import { useParams } from 'react-router-dom';



const ProductDetails = () => {
  const { id } = useParams()


  // const { data: product} = useFetch('http://localhost:9999/api/products/645e20cb4dcb1354d3c86311')
  const { data: product} = useFetch('http://localhost:9999/api/products/' + id)




  const renderStarRating = () => {
    const filledStars = Math.round(product.rating);
    const totalStars = 5;
    const starArray = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        starArray.push(<span className="gold-star" key={i}><FaStar /></span>);
      } else {
        starArray.push(<span className="gray-star" key={i}><FaStar /></span>);
      }

    }

    return starArray;
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-details'>

      <img src={heroBanner} alt="" />



      <div className='product-detail-top'>

        <img src={product.imageURL} alt="" width={501} height={430}/>

        <div className='product-description'>


          <h4>{product.name}</h4>
          <p className='description'>{product.description}</p>
          <hr></hr>


          <div className='star-rating'>
            {renderStarRating()}
            <span className='rating-text'>({product.review} Reviews)</span>
          </div>

          <div className='price'>{'$' + product.price}</div>

          <form className='quantity-form'>

            <div>
              <input type="button" value="-" className='minus' />
              <input type="number" className='qty-text' value={1} />
              <input type="button" value="+" className='plus' />
            </div>
            <button type='submit' className='addTo-cart-btn'>Add to Cart<MdOutlineAddShoppingCart className='shopping-cart-icon' /></button>
          </form>

          <ul className='color-variation'>
            <li ><a href="#"></a><span className='red'></span></li>
            <li ><a href="#"></a><span className='yellow'></span></li>
            <li ><a href="#"></a><span className='babyBlue'></span></li>
            <li>SKU: N/A</li>
          </ul>

          <button className='wish-btn'>Add to wishlist</button>

          <p>Category: {product.tags.join(', ')}</p>

        </div>


      </div>

      <div className='product-detail-bottom'>
        <ul className='nav-tabs'>
          <li className='nav-item'><a href="#" className='nav-link'>DESCRIPTION</a></li>
          <li className='nav-item'><a href="#" className='nav-link'>ADDITIONAL INFO</a></li>
          <li className='nav-item'><a href="#" className='nav-link'>REVIEWS(0)</a></li>
          <li className='nav-item'><a href="#" className='nav-link'>SHIPPING & DELIVERY</a></li>
        </ul>

        <div className='tab-content'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, velit.</h4>
          <div className='tab-row'>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio aspernatur provident magnam quo a aut. Nostrum voluptatibus, recusandae obcaecati numquam ab exercitationem sunt sit tenetur tempora. Corporis, voluptate. Molestiae itaque ad quo dolore perspiciatis. Repellat incidunt ipsa facilis! Tempore.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt tempore molestiae neque delectus laborum accusamus mollitia inventore. Architecto quidem omnis asperiores sint! Molestias velit quae ratione voluptatibus laborum reiciendis rerum officiis, deleniti accusamus repellat, minus quam, nam culpa aliquid consectetur officia quasi in ex vel. Ipsum perspiciatis laboriosam nemo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque ex minus quidem mollitia, voluptates quod dicta deleniti ratione ab dignissimos, nisi nihil non fuga consequuntur molestiae, optio at distinctio.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sunt optio sed quis impedit est dignissimos at similique mollitia maiores provident modi iste consectetur quia sint. Rem ea vitae facilis ut quae unde vel consequatur. Totam placeat, excepturi ducimus et ipsa nostrum in reiciendis ex magni, rerum adipisci atque neque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quis natus velit perspiciatis inventore corporis consequatur magni exercitationem alias eos labore aliquam illo quia suscipit minus ad totam voluptatibus, ex doloribus impedit voluptatum odit! Consequuntur, debitis a. Delectus, nisi quidem.</p>
            </div>
            <img src={product.imageURL} alt="" width={469} height={356}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails