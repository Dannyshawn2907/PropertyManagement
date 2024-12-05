import React from "react";
import Navber from "../../componets/navbar/Navbar";
import Pro from "../../componets/ProDeatils/ProDeatils";
import Description from "../../componets/description/DescriptionKey";
import SeasideSerenity from "../../componets/seasideSerenity/SeasideSerenity";
import PricingDetails from "../../componets/priceDeatils/PriceDeatils";
import PricingBreakdown from "../../componets/priceBooking/PriceBooking";
import ProperDeatils from '../../componets/properDeatils/ProperDeatils';
import SectionFAQ from '../../componets/sectionFaq/SectionFAQ';
import RealEstateBanner from "../../componets/realEstateBanner/RealEstateBanner";
import Frequently from "../../componets/frequently/Frequently";
import Footer from "../../componets/FooterFirstPage/Footer";


const PropertyDeails = () => {
  return (
    <div>
      <Navber />
      <Pro />
      <Description />
      <SeasideSerenity />
      <PricingDetails />
      <PricingBreakdown />
      <ProperDeatils />
      <SectionFAQ />
      <Frequently />
      <RealEstateBanner />
      <Footer />

    </div>
  );
};

export default PropertyDeails;
