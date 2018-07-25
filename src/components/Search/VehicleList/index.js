import React from 'react';
import { shape, objectOf, any } from 'prop-types';

import './index.css';
import VehicleCard from './VehicleCard';

export default function VehicleList({ results }) {
  if (results.data) {
    const listOfVehicles = results.data
      .map(element => <VehicleCard data={element} key={element.id} />);

    return (
      <div className="vehicle-list-container">
        {listOfVehicles}
      </div>
    );
  }

  // To Do: Better loading state

  return (
    <div className="vehicle-list-container">
      Loading data...
    </div>
  );
}

VehicleList.propTypes = {
  results: shape({
    metadata: objectOf(any),
    data: objectOf(any),
  }).isRequired,
};
