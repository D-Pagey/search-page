import React from 'react';

import './index.css';
import Subscription from '../subscription';
import Vehicles from '../vehicles';

export default function Results() {
  return (
    <section className="results-container">
      <h2 className="results-title">XXX VEHICLES FOUND NEAR LONDON, UNITED KINGDOM</h2>
      <Subscription />
      <Vehicles />
    </section>
  );
}
