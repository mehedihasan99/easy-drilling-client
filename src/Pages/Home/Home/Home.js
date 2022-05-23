import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Tools />
      <BusinessSummary />
    </div>
  );
};

export default Home;
