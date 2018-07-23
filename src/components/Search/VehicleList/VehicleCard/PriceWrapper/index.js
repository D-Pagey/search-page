import React from 'react';

import './index.css';

export default function PriceWrapper() {
  return (
    <div className="price-wrapper">
      <div className="price">
        <span className="old-price">£793</span>
        <span><span className="new-price">£256</span>/month</span>
        <span className="price-detail">(Monthly Vehicle Price inc. VAT)</span>
      </div>
      <button type="button" className="submit-btn">See more details</button>
    </div>
  );
}
