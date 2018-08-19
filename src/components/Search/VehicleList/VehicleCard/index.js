import React from 'react';
import { objectOf, any, number } from 'prop-types';

import './index.css';
import KeyFacts from './KeyFacts';
import FeaturesList from './FeaturesList';
import PriceWrapper from './PriceWrapper';
import VehicleSummary from './VehicleSummary';

export default function VehicleCard({ data, months, userParams }) {
  const { images, features, id } = data;
  const { vehicle_type } = userParams;

  return (
    <div className="vehicle-card">
      <img
        src={images[0].image_url}
        alt="Car"
        className="vehicle-img"
      />
      <div className="vehicle-copy">
        <VehicleSummary 
          make={data.vehicle_make}
          model={data.vehicle_model}
          engine={data.engine_size_information}
          postcode={data.postcode}
          available={data.available_start_date}
        />
        <KeyFacts data={data} />
        <FeaturesList features={features} id={id} />
        <PriceWrapper data={data} time={months} type={vehicle_type} />
      </div>
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
