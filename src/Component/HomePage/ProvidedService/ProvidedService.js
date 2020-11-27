import React, { useEffect, useState } from "react";
import ProvidedServicesList from "./ProvidedServicesList";
import "./ProvidedService.css";
const ProvidedService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://dhrubo-s-creative-agency.herokuapp.com/getService`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="distance">
      <div className="my-5">
        <h3 className="text-center">
          <strong>
            Provide Awesome <span style={{ color: "#7AB259" }}>Services</span>
          </strong>
        </h3>
      </div>
      <div className="provided-service-scroll pr-4">
        <div className="card-columns">
          {services.length > 0 ? (
            services.map((service, index) => (
              <ProvidedServicesList key={index} data={service} />
            ))
          ) : (
            <h4 className="text-center"> Loading... </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProvidedService;
