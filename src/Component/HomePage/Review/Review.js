import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleReview from "./SingleReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://dhrubo-s-creative-agency.herokuapp.com/allReview`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.slice(0, 6)); // 6 reviews are display in hompage
      });
  }, []);
  return (
    <div className="gap">
      <div className="my-5">
        <h3 className="text-center">
          <strong>
            Clients <span style={{ color: "#7AB259" }}>Feedbacks</span>
          </strong>
        </h3>
      </div>
      <div className="card-columns">
        {reviews.length > 0 ? (
          reviews.map((each, index) => <SingleReview key={index} data={each} />)
        ) : (
          <h4 className="text-center"> Loading... </h4>
        )}
      </div>
    </div>
  );
};

export default Review;
