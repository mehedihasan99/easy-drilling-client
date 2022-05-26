import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://gentle-river-04841.herokuapp.com/review", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-center text-primary my-20">
        Reviews:{reviews.length}
      </h2>
      <div className="grid grid-col-1 gap-8 md:grid-cols-2  lg:grid-cols-3">
        {reviews.map((review) => (
          <div>
            {/* 1 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">– {review.name}</h2>
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
