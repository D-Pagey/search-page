import React from 'react';
import { objectOf, any, number } from 'prop-types';

import './index.css';
import Button from '../../../../Button';

export default function PriceWrapper({ data, weeks }) {
  const price = data.price_discount_and_deposit_schedule_hash[weeks]
    .driver_price_pounds_after_discount_including_insurance;

  return (
    <div className="price-wrapper">
      <div className="price-div">
        <span><span className="price">£{price}</span>/month</span>
        <span className="price-detail">(Monthly Vehicle Price inc. VAT)</span>
      </div>
      <Button>See more details</Button>
    </div>
  );
}

PriceWrapper.propTypes = {
  data: objectOf(any).isRequired,
  weeks: number.isRequired,
};
