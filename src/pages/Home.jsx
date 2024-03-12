import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import Benefit from '../components/Benefit'
import BenefitTwo from '../components/BenefitTwo'
import DarkBox from '../components/DarkBox'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
       <Benefit />    
       <BenefitTwo />
       <DarkBox />
       <Footer/>
    </div>
  )
}

export default Home