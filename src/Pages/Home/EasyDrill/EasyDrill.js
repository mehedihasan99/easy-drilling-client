import React from "react";

const EasyDrill = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary mb-20">
        Easy Drilling
      </h2>
      <div className="grid grid-col-1 md:grid-cols-2  gap-8 lg:grid-cols-3">
        {/* 1 */}
        <div class="card w-96 bg-cyan-400 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">10 Years</h2>
            <p>
              For almost two decades, easy drilling has been offering our
              customers premium value when it comes to cost and quality in the
              tools industry.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div class="card w-96 bg-fuchsia-400 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Pros & Drill</h2>
            <p>
              From Impact Sockets to Step Drill Bits, professionals and Drill
              alike have come to trust our brand for their everyday tools needs.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div class="card w-96 bg-green-400 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Thank You</h2>
            <p>
              From starting as a small family business to now having customers
              all around the world, we're always grateful and humbled by your
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyDrill;
