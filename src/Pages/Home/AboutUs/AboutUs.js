import React from "react";
import drill from "../../../image/drillPic/drill.jpg";
const AboutUs = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary mt-20">
        Drill Machine
      </h2>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="rounded" src={drill} alt="" />
          <div>
            <h1 className="text-5xl font-bold">Drill Machine</h1>
            <p className="py-6">
              Drill machine is a useful tool used while making any DIY projects
              for drilling holes, making and assembling furniture, metalworking
              and woodworking. These drill machines are also known as Hand Drill
              Machine and other besides drilling holes, the hand drill machine
              can also be used for various functions such as seamlessly
              retracting and driving the screws irrespective of the type and
              size of the head the screw comes with. Right now, there are a
              number of brands who are selling hand drill machines and it's
              pretty much confusing to buy which one. To ease your work, we have
              brought this article in which we have listed some top drilling
              machines which are worth every penny of your investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
