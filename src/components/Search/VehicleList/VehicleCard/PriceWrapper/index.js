import React from 'react';
import { objectOf, any, number } from 'prop-types';

import './index.css';
import Button from '../../../../Button';

export default function PriceWrapper({ data, time, type }) {
  const price = data.price_discount_and_deposit_schedule_hash[time]
    .driver_price_pounds_after_discount_including_insurance;

  return (
    <div className="price-wrapper">
      <div className="price-div">
        <span><span className="price">£{price}</span> / {type === 'Consumer' ? 'Month' : 'Week'}</span>
        <span className="price-detail">(Monthly Vehicle Price inc. VAT)</span>
      </div>
      <Button>See more details</Button>
    </div>
  );
}

PriceWrapper.propTypes = {
  data: objectOf(any).isRequired,
  time: number.isRequired,
};
