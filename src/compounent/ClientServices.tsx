import React from 'react';
import  './ClientServices.css';
const ClientServices = () => {
  const services = [
    'Digital Video Advertising',
    'Corporate Movies',
    'Social Media',
    'Influencer Marketing',
    'Content Creation',
    'Product Shooting'
  ];

  return (
    <div className="container">
      <div className="section digital-video">
        <h2>Digital Video</h2>
      </div>
      <div className="section advertising">
        <h2>Advertising</h2>
      </div>
      <div className="section corporate">
        <h2>Corporate</h2>
      </div>
    </div>
  );
};

export default ClientServices;