import React from "react";
import "./ClientServices.css";

const ClientServices = () => {
  const services = ["Content Creation", "Product Shooting"];

  return (
    <div className="container">
      {services.map((service, index) => (
        <div key={index} className={`shape shape-${index}`}>
          {service}
        </div>
      ))}
    </div>
  );
};

export default ClientServices;
