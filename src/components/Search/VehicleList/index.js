import React from 'react';

import './index.css';
import VehicleCard from './VehicleCard';

export default function VehicleList({ results }) {
  console.log(results);
  if (results.data) {
    return (
      <div className="vehicle-list-container">
        <VehicleCard data={results.data[3]} />
      </div>
    );
  }

  return (
    <div className="vehicle-list-container">
      Loading data...
    </div>
  );
}
