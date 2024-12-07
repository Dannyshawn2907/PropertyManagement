import React from 'react'
import Navbar from '../../componets/navbar/Navbar'
import Elevate from '../../componets/elevate/Elevate'
import Yungsup from  '../../componets/yungsup/Yungsup'
import YungsupTwo from  '../../componets/yungsupTwo/YungsupTwo'
import UnlockDream from "../../componets/unlockDream/UnlockDream"
import InvestmentSection from '../../componets/investmentSection/InvestmentSection'


const ServicesPage = () => {
  return (
    <div>
        <Navbar /> 
        <Elevate />
        <Yungsup />
        <YungsupTwo />
        <UnlockDream />
        <InvestmentSection />
    </div>
  )
}

export default ServicesPage