import React from "react";
import ClientNavBar from "../../ClientSite/ClientNavBar/ClientNavBar";
import AdminSlideBar from "../AdminSlideBar/AdminSlideBar";

const MakeAdmin = () => {
  return (
    <div>
      <section>
        <ClientNavBar></ClientNavBar>
        <div className="row">
          <div className="col-md-3">
            <AdminSlideBar></AdminSlideBar>
          </div>
          <div className="col-md-9">
            <div>
              <p>
                <strong>Email</strong>
              </p>
              <input
                style={{
                  border: "none",
                  boxShadow: "1px 5px 10px gray",
                  borderRadius: "15px",
                  height: "50px",
                  padding: "15px",
                }}
                type="text"
              />
              <button className="btn btn-success m-2">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAdmin;
