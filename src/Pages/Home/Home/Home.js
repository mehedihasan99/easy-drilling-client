import React from "react";
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
    </div>
  );
};

export default Home;
