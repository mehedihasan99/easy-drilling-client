import React from "react";

const Review = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary my-20">
        Reviews
      </h2>
      <div className="grid grid-col-1 gap-8 lg:grid-cols-3">
        {/* 1 */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">– PotashCorp</h2>
            <p>
              “That was the fastest response I ever had, wow! I wish every
              company we deal with was that fast!”
            </p>
          </div>
        </div>
        {/* 2 */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">– Justine Bae</h2>
            <p>
              “We are 100% satisfied with Prater’s responsiveness to our needs,
              exceptional delivery time, and overall customer service.”
            </p>
          </div>
        </div>
        {/* 3 */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">– Wicks Pies</h2>
            <p>
              “As Quality Control, I love your sifter’s design and ease of
              cleaning.”
            </p>
          </div>
        </div>
        {/* 4 */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">– Barry Callebaut</h2>
            <p>
              “Just wanted you to know that the lump breaker has been running
              very well. No problems since start up. Thanks for your help.”
            </p>
          </div>
        </div>
        {/* 5 */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">– Harray Joe</h2>
            <p>
              {" "}
              I could see that you have been working tirelessly day after day to
              assist our customers in navigating the new change. It makes me
              very proud to have such a dedicated team member working with us.
              Great work!
            </p>
          </div>
        </div>
        {/* 6 */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">– Joe Teamn</h2>
            <p>
              Thank you for all of the recent overtime you've worked to cover
              for people who are on leave. Your efforts have enabled us to
              uphold our customer service, ensuring that daily operations do not
              come to a halt and that everything continues in a timely manner.
              You are a true superstar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
