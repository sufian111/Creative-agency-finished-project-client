import React from "react";

const SingleOrderList = (props) => {
  const order = props.order;
  return (
    <div className="col-md-4 justify-content-between">
      <div>
        <img style={{ width: "30%" }} src={order.imageUrl} alt="" />
        <button className="btn btn-primary ml-2">{order.serviceStates}</button>
        <h4>
          <strong>{order.title}</strong>
        </h4>
        <p>{order.description}</p>
      </div>
    </div>
  );
};

export default SingleOrderList;
