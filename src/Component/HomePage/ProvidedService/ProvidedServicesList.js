import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const ProvidedServicesList = (props) => {
  const { description, title, imageUrl } = props.data;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const serviceStates = "pending";

  const [serviceInfo, setServiceInfo] = useState({
    ...loggedInUser,
    description: description,
    imageUrl: imageUrl,
    title: title,
    price: "100",
    serviceStates: serviceStates,
  });

  const handleOrder = () => {
    setLoggedInUser(serviceInfo);
  };

  return (
    <Link to="/order" style={{ textDecoration: "none", color: "inherit" }}>
      <div onClick={handleOrder} className="card m-3 px-3">
        <div className="text-center service-info  p-4">
          <img src={imageUrl} height="80" alt="" /> <br /> <br />
          <h5 className="font-weight-bold">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProvidedServicesList;
