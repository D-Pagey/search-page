import React from 'react';
import { objectOf, any, number } from 'prop-types';

import './index.css';
import KeyFacts from './KeyFacts';
import FeaturesList from './FeaturesList';
import PriceWrapper from './PriceWrapper';
import VehicleSummary from './VehicleSummary';

// I could reduce the amount of data passed down as props

export default function VehicleCard({ data, months }) {
  return (
    <div className="vehicle-card">
      <img
        src={data.images[0].image_url}
        alt="Car"
        className="vehicle-img"
      />
      <VehicleSummary data={data} />
      <KeyFacts data={data} />
      <FeaturesList features={data.features} id={data.id} />
      <PriceWrapper data={data} time={months} />
    </div>
  );
}

VehicleCard.propTypes = {
  data: objectOf(any).isRequired,
  months: number,
};

VehicleCard.defaultProps = {
  months: 12,
};
