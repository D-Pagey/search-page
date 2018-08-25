import React from 'react';
import { number, string } from 'prop-types';

import './index.css';

export default function KeyFacts({
  year,
  fuel,
  mpg,
  body,
  seats,
  color,
  transmission,
  doors,
}) {
  return (
    <div className="key-facts">
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{year}</li>
        <li className="key-facts-list-item">{fuel}</li>
        <li className="key-facts-list-item">{mpg} MPG</li>
      </ul>
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{body}</li>
        <li className="key-facts-list-item">{seats} Seats</li>
        <li className="key-facts-list-item">{color}</li>
      </ul>
      <ul className="key-facts-list">
        <li className="key-facts-list-item">{transmission}</li>
        <li className="key-facts-list-item">{doors} Doors</li>
      </ul>
    </div>
  );
}

KeyFacts.propTypes = {
  year: number.isRequired,
  fuel: string.isRequired,
  mpg: number.isRequired,
  body: string.isRequired,
  seats: number.isRequired,
  color: string.isRequired,
  transmission: string.isRequired,
  doors: number.isRequired,
};
