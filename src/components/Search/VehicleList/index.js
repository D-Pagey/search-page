import React from 'react';

import './index.css';
import VehicleCard from './VehicleCard';

export default function VehicleList({ results }) {
  if (results.data) {
    const listOfVehicles = results.data.map(element => <VehicleCard data={element} />);
    return (
      <div className="vehicle-list-container">
        {listOfVehicles}
      </div>
    );
  }

  return (
    <div className="vehicle-list-container">
      Loading data...
    </div>
  );
}
