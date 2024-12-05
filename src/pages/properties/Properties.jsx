import React from 'react'
import Navbar from '../../componets/navbar/Navbar'
import Hero from '../../componets/hero/Hero'
import PropertySearch from '../../componets/searchProperty/SearchPorpery'
import FormComponent from '../../componets/formComponent/FormComponent'
import Footer from '../../componets/FooterFirstPage/Footer'
import RealEstateBanner from '../../componets/realEstateBanner/RealEstateBanner'
import PricingDetails from '../../componets/priceDeatils/PriceDeatils'

const Properties = () => {
  return (
    <div>
        <Navbar />
        <PropertySearch />
        <Hero />
        <FormComponent />
        <RealEstateBanner />
        <PricingDetails />
        <Footer />
        
    </div>
  )
}

export default Properties
