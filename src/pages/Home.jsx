import React from 'react'
import HeroHomepage from '../components/HeroHomepage'
import Subscribe from '../components/Subscribe'
import CollectionHomePage from '../components/CollectionHomePage'

const Home = () => {
  return (
    <div>
      <HeroHomepage/>
      <CollectionHomePage/>
      <Subscribe/>
      
    </div>
  )
}

export default Home