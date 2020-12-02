import React from "react";
import ClientNavBar from "../../ClientSite/ClientNavBar/ClientNavBar";
import AdminSlideBar from "../AdminSlideBar/AdminSlideBar";

const Admin = () => {
  return (
    <div>
      <section>
        <ClientNavBar></ClientNavBar>
        <div className="row">
          <div className="col-md-3">
            <AdminSlideBar></AdminSlideBar>
          </div>
          <div>
            <p>details loding</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
