import React from 'react';
import { objectOf, any } from 'prop-types';

import './index.css';

export default function KeyFacts({ data }) {
  const { 
    year,
    fuel,
    mpg,
    body_information,
    number_seats_information,
    color,
    transmission,
    number_doors_information
   } = data;

  return (
    <div className="key-facts">
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{year}</li>
        <li className="key-facts-list-item">{fuel}</li>
        <li className="key-facts-list-item">{mpg} MPG</li>
      </ul>
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{body_information}</li>
        <li className="key-facts-list-item">{number_seats_information} Seats</li>
        <li className="key-facts-list-item">{color}</li>
      </ul>
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{transmission}</li>
        <li className="key-facts-list-item">{number_doors_information} Doors</li>
      </ul>
    </div>
  );
}

KeyFacts.propTypes = {
  data: objectOf(any).isRequired,
};
