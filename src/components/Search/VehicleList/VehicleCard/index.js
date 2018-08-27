import React from 'react';
import styled from 'styled-components';
import {
  objectOf,
  any,
  number,
  string,
} from 'prop-types';

import KeyFacts from './KeyFacts';
import FeaturesList from './FeaturesList';
import PriceWrapper from './PriceWrapper';
import VehicleSummary from './VehicleSummary';

const VehicleCardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const VehicleImage = styled.img.attrs({
  alt: 'Car',
})`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  @media (min-width: 1024px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 6px;
    height: 270px;
    width: 276px;
  }
`;

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
