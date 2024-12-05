import React from "react";
import Navbar from "../../componets/navbar/Navbar";
import OurJourney from "../../componets/ourJourney/OurJourney";
import OurValues from "../../componets/ourValue/OurValue";
import OurAchievements from "../../componets/ourAchievements/OurAchievements";
import Steps from "../../componets/steps/Steps";
import Team from "../../componets/teams/Teams";
import ValuedClients from "../../componets/valuedClients/ValuedClients";
import Footer from "../../componets/FooterFirstPage/Footer";


const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <Steps />
      <Team />
      <ValuedClients />
      <Footer />
    </div>
  );
};

export default AboutUs;
