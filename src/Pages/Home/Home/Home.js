import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import EasyDrill from "../EasyDrill/EasyDrill";
import Review from "../Review/Review";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div className="px-0 md:px-14">
      <Banner />
      <Tools />
      <BusinessSummary />
      <Review />
      <AboutUs />
      <EasyDrill />
      <Footer />
    </div>
  );
};

export default Home;
