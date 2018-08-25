import React from 'react';
import { number, string } from 'prop-types';

import './index.css';
import Button from '../../../../Button';

export default function PriceWrapper({ price, type }) {
  return (
    <div className="price-wrapper">
      <div className="price-div">
        <span><span className="price">£{price}</span> /
          {type === 'Consumer' ? 'Month' : 'Week'}
        </span>
        <span className="price-detail">(Monthly Vehicle Price inc. VAT)</span>
      </div>
      <Button>See more details</Button>
    </div>
  );
}

PriceWrapper.propTypes = {
  price: number.isRequired,
  type: string.isRequired,
};
