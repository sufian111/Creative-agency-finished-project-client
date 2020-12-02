import React from "react";
import serviceIcon from "../../../Image/serviceList.png";
import plusIcon from "../../../Image/plus 1.png";
import adminIcon from "../../../Image/person.png";
import { NavLink } from "react-router-dom";
const AdminSlideBar = () => {
  return (
    <div>
      <div className="sidebar-option ml-3 pl-5">
        <NavLink
          to="/admin"
          activeClassName="activeUrl"
          className="sidebar-link"
        >
          <h6>
            <img src={serviceIcon} alt="" /> <strong>service List</strong>
          </h6>
        </NavLink>
        <NavLink
          to="/addService"
          activeClassName="activeUrl"
          className="sidebar-link"
        >
          <h6>
            <img style={{ width: "8%" }} src={plusIcon} alt="" />{" "}
            <strong>Add Service</strong>
          </h6>
        </NavLink>
        <NavLink
          to="/makeAdmin"
          activeClassName="activeUrl"
          className="sidebar-link"
        >
          <h6>
            <img src={adminIcon} alt="" /> <strong>Make Admin</strong>
          </h6>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSlideBar;
