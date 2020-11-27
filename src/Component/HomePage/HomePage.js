import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import NavBarSection from "./NavBarSection/NavBarSection";
import "./HomePage.css";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
import ProvidedService from "./ProvidedService/ProvidedService";
import AllWorks from "./AllWorks/AllWorks";
import Review from "./Review/Review";
import Footer from "./Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <div className="topBg">
        <NavBarSection></NavBarSection>
        <BannerSection></BannerSection>
      </div>
      <div className="container">
        <CompanyLogo></CompanyLogo>
        <ProvidedService></ProvidedService>
      </div>
      <div className="workBg">
        <AllWorks></AllWorks>
      </div>
      <div className="container">
        <Review></Review>
      </div>
      <div className="footerBg">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
