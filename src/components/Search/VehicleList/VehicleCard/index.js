import React from 'react';
import {
  objectOf,
  any,
  number,
  string,
} from 'prop-types';

import { VehicleCardWrapper, VehicleImage } from './styles';
import KeyFacts from './KeyFacts';
import FeaturesList from './FeaturesList';
import PriceWrapper from './PriceWrapper';
import VehicleSummary from './VehicleSummary';

export default function VehicleCard({ data, months, type }) {
  const price = data.price_discount_and_deposit_schedule_hash[months]
    .driver_price_pounds_after_discount_including_insurance;

  return (
    <VehicleCardWrapper>
      <VehicleImage src={data.images[0].image_url} />
      <div>
        <VehicleSummary
          make={data.vehicle_make}
          model={data.vehicle_model}
          engine={data.engine_size_information}
          postcode={data.postcode}
          available={data.available_start_date}
        />
        <KeyFacts
          year={data.year}
          fuel={data.fuel}
          mpg={data.mpg}
          body={data.body_information}
          seats={data.number_seats_information}
          color={data.color}
          transmission={data.transmission}
          doors={data.number_doors_information}
        />
        <FeaturesList features={data.features} />
        <PriceWrapper price={price} type={type} />
      </div>
    </VehicleCardWrapper>
  );
}

VehicleCard.propTypes = {
  data: objectOf(any).isRequired,
  months: number,
  type: string.isRequired,
};

VehicleCard.defaultProps = {
  months: 12,
};
