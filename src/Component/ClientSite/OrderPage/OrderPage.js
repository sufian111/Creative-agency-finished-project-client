import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import ClientNavBar from "../ClientNavBar/ClientNavBar";
import ClientSlider from "../ClientSlider/ClientSlider";
import "./OrderPage.css";

const OrderPage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const [order, setOrder] = useState({});

  const handleChange = () => {
    alert(
      "please do not change any thing, go back and select any service from home page"
    );
  };
  const handleSubmit = () => {
    fetch("http://localhost:3001/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loggedInUser),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        history.push("/orderList");
      });
  };

  return (
    <div className="">
      <section>
        <ClientNavBar></ClientNavBar>
        <div className="row">
          <div className="col-md-3">
            <ClientSlider></ClientSlider>
          </div>

          <div className="col-md-9 clientBg container">
            <div className="header-option d-flex justify-content-between  ml-5 ">
              <h4 className=" text-brand "> Make Order </h4>
            </div>

            <div className="rightOption ">
              <form onSubmit={handleSubmit} className="order-form " action="">
                <div className="form-group">
                  <input
                    type="text"
                    name="displayName"
                    placeholder="Your name / Company's name"
                    id=""
                    defaultValue={loggedInUser.displayName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    id=""
                    onChange={handleChange}
                    defaultValue={loggedInUser.email}
                    required
                  />

                  <input
                    type="text"
                    name="selectedServiceName"
                    placeholder="selected Service Name "
                    id=""
                    onChange={handleChange}
                    defaultValue={loggedInUser.title}
                    required
                  />
                  <input
                    type="text"
                    name="imageUrl"
                    placeholder="Host your image in imagebb.com and paste the url "
                    id=""
                    onChange={handleChange}
                    defaultValue={loggedInUser.imageUrl}
                    required
                  />

                  <textarea
                    type="text-area"
                    name="description"
                    placeholder="Enter Description "
                    id=""
                    defaultValue={loggedInUser.description}
                    onChange={handleChange}
                    required
                    rows="4"
                    cols="28"
                    className="order-text-area"
                  />

                  <div className="form-row inline ">
                    <div className=" form-group col mr-2">
                      <input
                        type="text"
                        name="price"
                        placeholder="service price"
                        id=""
                        onChange={handleChange}
                        defaultValue={loggedInUser.price}
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="" style={{ width: " 170px" }}>
                <button onClick={handleSubmit} className="brand-dark-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
