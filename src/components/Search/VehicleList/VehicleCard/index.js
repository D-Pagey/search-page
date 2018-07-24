import React from 'react';

import './index.css';
import KeyFacts from './KeyFacts';
import FeaturesList from './FeaturesList';
import PriceWrapper from './PriceWrapper';
import VehicleSummary from './VehicleSummary';

export default function VehicleCard(props) {
  const { data } = props;

  return (
    <div className="vehicle-card">
      <img
        src={data.images[0].image_url}
        alt="Car"
        className="vehicle-img"
      />
      <VehicleSummary data={data} />
      <KeyFacts data={data} />
      <FeaturesList features={data.features} />
      <PriceWrapper data={data} weeks={12} />
    </div>
  );
}
