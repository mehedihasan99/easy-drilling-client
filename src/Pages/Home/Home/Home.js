import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Review from "../Review/Review";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Tools />
      <BusinessSummary />
      <Review />
      <AboutUs />
    </div>
  );
};

export default Home;
