import React from "react";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../Image/logo.png";
import "./ClientNavBar.css";

const ClientNavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const location = useLocation();

  const handleLogOUt = () => {
    window.location.reload("Refresh");
  };

  return (
    <div className="m-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-3">
          <NavLink style={{ border: "none" }} to="/" className="">
            <img className="image-fluid logoUpdate" src={logo} alt="" />
          </NavLink>
        </div>

        <div className="col-md-3">
          {loggedInUser && loggedInUser.email ? (
            <p>
              <strong>{loggedInUser.displayName}</strong>
            </p>
          ) : (
            <p>
              <strong>Hello Client</strong>
            </p>
          )}
        </div>

        <div className="col-md-3">
          <img
            src={loggedInUser.photo}
            style={{ width: "44px", height: "44px", marginTop: "" }}
            className="card-img-top rounded-circle mr-2"
            alt="..."
          />
        </div>
        <div className="col-md-3">
          <button onClick={handleLogOUt} className="brand-dark-btn">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientNavBar;
