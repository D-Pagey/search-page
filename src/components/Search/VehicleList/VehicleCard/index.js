import React from 'react';

import './index.css';

export default function VehicleCard({ data }) {
  return (
    <div className="vehicle-card">
      <img
        src={data.images[0].image_url} 
        alt="Car"
        className="vehicle-img"
      />
    </div>
  );
}
