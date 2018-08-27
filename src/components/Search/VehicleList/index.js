import React from 'react';
import styled from 'styled-components';
import { arrayOf, any, string } from 'prop-types';

import VehicleCard from './VehicleCard';

const VehicleListWrapper = styled.div`
  margin: 15px 0;
  width: 290px;
  @media (min-width: 375px) {
    width: 340px;
  }
  @media (min-width: 425px) {
    width: 390px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export default function VehicleList({ data, type }) {
  let content;

  if (data) {
    if (data.length) {
      content = data
        .map(element => (<VehicleCard
          data={element}
          key={element.id}
          type={type}
        />
        ));
    } else {
      content = `Unfortunately there are no results for this specific search. 
      Please try and broaden the filters to see potential options.`;
    }
  } else {
    content = 'Loading data...';
  }

  return (
    <VehicleListWrapper>
      {content}
    </VehicleListWrapper>
  );
}

VehicleList.propTypes = {
  data: arrayOf(any).isRequired,
  type: string.isRequired,
};
