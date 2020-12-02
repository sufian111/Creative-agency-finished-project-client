import React from "react";
import { useState } from "react";
import ClientNavBar from "../../ClientSite/ClientNavBar/ClientNavBar";
import AdminSlideBar from "../AdminSlideBar/AdminSlideBar";

const AddService = () => {
  const [service, setService] = useState({});

  const handleChange = (e) => {
    const newService = { ...service };
    newService[e.target.name] = e.target.value;
    setService(newService);
  };

  const handleSubmit = () => {
    fetch("https://glacial-tor-13010.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("service added");
      });
  };
  return (
    <div>
      <section>
        <ClientNavBar></ClientNavBar>
        <div className="row">
          <div className="col-md-3">
            <AdminSlideBar></AdminSlideBar>
          </div>
          <div className="col-md-9">
            <div className="rightOption ">
              <form className="order-form " action="">
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Service title"
                    onChange={handleChange}
                    id=""
                    required
                  />

                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    id=""
                    required
                  />

                  <input
                    type="text"
                    name="imageUrl"
                    placeholder="Host your image in imagebb.com and drop the link"
                    onChange={handleChange}
                    id=""
                    required
                  />

                  <input
                    type="text"
                    name="id"
                    placeholder="Service id"
                    onChange={handleChange}
                    id=""
                    required
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
      </section>
    </div>
  );
};

export default AddService;
