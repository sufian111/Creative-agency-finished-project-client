import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import ClientNavBar from "../ClientNavBar/ClientNavBar";
import ClientSlider from "../ClientSlider/ClientSlider";
import SingleOrderList from "./SingleOrderList";

const OrderListPage = () => {
  const [orderInfo, setOrderInfo] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:3001/userOrderList`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setOrderInfo(data);
        } else {
          console.log("no data found");
        }
      })
      .catch((err) => console.log(err));
  }, [loggedInUser.email]);

  return (
    <div>
      <section>
        <ClientNavBar></ClientNavBar>
        <div className="row">
          <div className="col-md-3">
            <ClientSlider></ClientSlider>
          </div>
          <div className="col-md-9">
            <div className="row">
              {orderInfo.map((order) => (
                <SingleOrderList
                  key={order._id}
                  order={order}
                ></SingleOrderList>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderListPage;
