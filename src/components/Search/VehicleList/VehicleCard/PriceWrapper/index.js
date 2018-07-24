import React from 'react';

import './index.css';

export default function PriceWrapper({ data, weeks }) {
  const price = data.price_discount_and_deposit_schedule_hash[weeks]
    .driver_price_pounds_after_discount_including_insurance;

  return (
    <div className="price-wrapper">
      <div className="price">
        <span><span className="new-price">£{price}</span>/month</span>
        <span className="price-detail">(Monthly Vehicle Price inc. VAT)</span>
      </div>
      <button type="button" className="submit-btn">See more details</button>
    </div>
  );
}
