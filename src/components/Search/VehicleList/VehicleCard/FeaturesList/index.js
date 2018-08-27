import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import titleCase from '../../../../../utils/capitalize';

const FeaturesListWrapper = styled.div`
  align-self: center;
  margin-top: 3px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Features = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0 10px;
`;

const FeatureItem = styled.li`
  color: #7d807c;
  font-size: 12px;
  padding-left: 5px;
`;

function Feature({ feature }) {
  const formatted = titleCase(feature.replace(/_/g, ' '));

  return (
    <FeatureItem>{formatted} •</FeatureItem>
  );
}

export default function FeaturesList({ features }) {
  return (
    <FeaturesListWrapper>
      <Features>
        {features.map(element => <Feature feature={element} key={element} />)}
      </Features>
    </FeaturesListWrapper>
  );
}

Feature.propTypes = {
  feature: string.isRequired,
};

FeaturesList.propTypes = {
  features: arrayOf(string).isRequired,
};
