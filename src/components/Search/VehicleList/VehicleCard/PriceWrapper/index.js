import React from 'react';
import { number, string } from 'prop-types';

import {
  PriceWrapperDiv,
  PriceDiv,
  Price,
  PriceDetail,
} from './styles';
import Button from '../../../../Button';

export default function PriceWrapper({ price, type }) {
  return (
    <PriceWrapperDiv>
      <PriceDiv>
        <span><Price>£{price}</Price> /
          {type === 'Consumer' ? 'Month' : 'Week'}
        </span>
        <PriceDetail>(Monthly Vehicle Price inc. VAT)</PriceDetail>
      </PriceDiv>
      <Button>See more details</Button>
    </PriceWrapperDiv>
  );
}

PriceWrapper.propTypes = {
  price: number.isRequired,
  type: string.isRequired,
};
