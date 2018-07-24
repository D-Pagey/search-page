import React from 'react';

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
      <Button text="See more details" />
    </div>
  );
}
