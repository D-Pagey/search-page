import React from 'react';
import {
  shape,
  objectOf,
  arrayOf,
  any,
} from 'prop-types';

import './index.css';
import VehicleCard from './VehicleCard';

export default function VehicleList({ data, vehicle_type }) {
  let content;

  if (data) {
    if (data.length) {
      content = data
        .map(element => (<VehicleCard
          images={element.images}
          features={element.features}
          id={element.id}
          type={vehicle_type}
        />
        ));
    } else {
      content = `Unfortunately there are no results for this specific search. 
      Please try and broaden the filters to see potential options.`;
    }
  } else {
    content = 'Loading data...';
  }

  return (
    <div className="vehicle-list-container">
      {content}
    </div>
  );
}

VehicleList.propTypes = {
  results: shape({
    metadata: objectOf(any),
    data: arrayOf(any),
  }).isRequired,
  userParams: objectOf(any).isRequired,
};
