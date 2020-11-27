import React from "react";
import ClientNavBar from "../ClientNavBar/ClientNavBar";
import ClientSlider from "../ClientSlider/ClientSlider";

const ReviewPage = () => {
  return (
    <div>
      <section>
        <ClientNavBar></ClientNavBar>
        <div className="row">
          <div className="col-md-3">
            <ClientSlider></ClientSlider>
          </div>
          <div className="col-md-9">
            <p>reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;
