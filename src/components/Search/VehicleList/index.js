import React from 'react';
import { arrayOf, any, string } from 'prop-types';

import './index.css';
import VehicleCard from './VehicleCard';

export default function VehicleList({ data, type }) {
  let content;

  if (data) {
    if (data.length) {
      content = data
        .map(element => (<VehicleCard
          data={element}
          key={element.id}
          type={type}
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
  data: arrayOf(any).isRequired,
  type: string.isRequired,
};
