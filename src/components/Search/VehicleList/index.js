import React from 'react';

import './index.css';
import VehicleCard from './VehicleCard';

export default function VehicleList({ results }) {
  if (results.data) {
    return (
      <div className="vehicle-list-container">
        <VehicleCard data={results.data[0]} />
      </div>
    );
  }

  return (
    <div className="vehicle-list-container">
      Loading data...
    </div>
  );
}
