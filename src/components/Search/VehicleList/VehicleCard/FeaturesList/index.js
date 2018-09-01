import React from 'react';
import { arrayOf, string } from 'prop-types';

import { FeaturesListWrapper, Features, FeatureItem } from './styles';
import titleCase from '../../../../../utils/capitalize';

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
