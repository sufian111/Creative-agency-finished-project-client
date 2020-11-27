import React from "react";
import airbnb from "../../../Image/airbnb.png";
import google from "../../../Image/google.png";
import netflix from "../../../Image/netflix.png";
import slack from "../../../Image/slack.png";
import ubar from "../../../Image/uber.png";

import "./CompanyLogo.css";
const CompanyLogo = () => {
  return (
    <div className="my-5 text-center">
      <div className="card-deck text-center logo">
        <div className="mr-2">
          <img src={slack} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={google} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={ubar} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={netflix} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={airbnb} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
