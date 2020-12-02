import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";
import "./AddReview.css";
const AddReview = () => {
  //   const [loggedInUser] = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const [review, setReview] = useState({
    name: loggedInUser.displayName,
    imgUrl: loggedInUser.photo,
  });

  const handleChange = (e) => {
    const newReview = { ...review };
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };

  const handleSubmit = () => {
    fetch("https://glacial-tor-13010.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        history.push("/");
      });
  };
  return (
    <div>
      <div className="reviewBg">
        <div className="header-option d-flex justify-content-between  ml-5 ">
          <h4 className=" text-brand "> Give A Review </h4>
        </div>

        <div className="rightOption ">
          <form className="order-form " action="">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your name "
                onChange={handleChange}
                id=""
                required
                defaultValue={loggedInUser.displayName}
              />

              <input
                type="text"
                name="company"
                placeholder="Company's name Designation"
                onChange={handleChange}
                id=""
                required
              />
              <textarea
                type="text-area"
                name="description"
                placeholder="Enter Description "
                onChange={handleChange}
                id=""
                required
                rows="4"
                cols="28"
                className="order-text-area"
              />
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
  );
};

export default AddReview;
