import React from "react";
import "./Clientele.css";

const Clientele = () => {
  return (
    <div className="clientele-container">
      <div className="title">OUR CLIENTELE</div>
      <div className="grid">
        {Array(8).fill("").map((_, index) => (
          <div key={index} className="client-box"></div>
        ))}
      </div>
    </div>
  );
};

export default Clientele;
