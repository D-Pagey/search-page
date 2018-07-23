import React from 'react';

import './index.css';

export default function KeyFacts({ data }) {
  return (
    <div className="key-facts">
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{data.year}</li>
        <li className="key-facts-list-item">{data.fuel}</li>
        <li className="key-facts-list-item">{data.mpg} MPG</li>
      </ul>
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{data.body_information}</li>
        <li className="key-facts-list-item">{data.number_seats_information} Seats</li>
        <li className="key-facts-list-item">{data.color}</li>
      </ul>
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{data.transmission}</li>
        <li className="key-facts-list-item">{data.number_doors_information} Doors</li>
      </ul>
    </div>
  );
}
