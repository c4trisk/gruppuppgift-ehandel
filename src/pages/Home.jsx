import React from 'react'
import HeroHomepage from '../components/HeroHomepage'
import Subscribe from '../components/Subscribe'
import SaleHomepage from '../components/SaleHomepage'
import TopHomepage from '../components/TopHomepage'

const Home = () => {
  return (
    <div>
      <HeroHomepage/>

      <SaleHomepage />
      <TopHomepage />
      <Subscribe/>
    </div>
  )
}

export default Home