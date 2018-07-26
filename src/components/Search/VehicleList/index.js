import React from 'react';
import {
  shape,
  objectOf,
  arrayOf,
  any,
} from 'prop-types';

import './index.css';
import VehicleCard from './VehicleCard';

export default function VehicleList({ results }) {
  let content;

  if (results.data) {
    if (results.data.length) {
      content = results.data
        .map(element => <VehicleCard data={element} key={element.id} />);
    } else {
      content = 'No results';
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
};
