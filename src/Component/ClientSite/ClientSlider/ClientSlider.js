import React from "react";
import cartIcon from "../../../Image/cart.png";
import orderListIcon from "../../../Image/serviceList.png";
import review from "../../../Image/message-square.png";
import { NavLink } from "react-router-dom";
import "./ClientSlider.css";
const ClientSlider = () => {
  return (
    <div>
      <div className="sidebar-option ml-3 pl-5">
        <NavLink
          to="/order"
          activeClassName="activeUrl"
          className="sidebar-link"
        >
          <h6>
            <img src={cartIcon} alt="" /> <strong>Order</strong>
          </h6>
        </NavLink>
        <NavLink
          to="/orderList"
          activeClassName="activeUrl"
          className="sidebar-link"
        >
          <h6>
            <img src={orderListIcon} alt="" /> <strong>Order list</strong>
          </h6>
        </NavLink>
        <NavLink
          to="/review"
          activeClassName="activeUrl"
          className="sidebar-link"
        >
          <h6>
            <img src={review} alt="" /> <strong>Review</strong>
          </h6>
        </NavLink>
      </div>
    </div>
  );
};

export default ClientSlider;
