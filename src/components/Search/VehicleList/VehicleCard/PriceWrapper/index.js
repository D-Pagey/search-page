import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import Button from '../../../../Button';

const PriceWrapperDiv = styled.div`
  align-self: center;
  margin-top: 3px;
  padding: 0 10px;
  width: 100%;
`;

const PriceDiv = styled.div`
  background-color: #bef9f9;
  border-radius: 6px;
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`;

const PriceDetail = styled.span`
  font-size: 12px;
`;

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
