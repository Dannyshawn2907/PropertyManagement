import React from "react";
import Navbar from "../../componets/navbar/Navbar";
import HomeCard from "../../componets/homeCard/HomeCard";
import Hero from "../../componets/hero/Hero";
import Testimonials from "../../componets/testimonials/Testimonials";
import Frequently from "../../componets/frequently/Frequently";
import RealEstateBanner from "../../componets/realEstateBanner/RealEstateBanner";
import Footer from "../../componets/FooterFirstPage/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCard />
      <Hero />
      <Testimonials />
      <Frequently />
      <RealEstateBanner />
      <Footer />
    </div>
  );
};

export default Home;
