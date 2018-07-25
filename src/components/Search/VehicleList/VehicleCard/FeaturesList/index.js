import React from 'react';
import { arrayOf, string } from 'prop-types';

import './index.css';
import titleCase from '../../../../../utils/capitalize';

function Feature({ feature }) {
  const formatted = titleCase(feature.replace(/_/g, ' '));

  return (
    <li className="feature">{formatted} •</li>
  );
}

export default function FeaturesList({ features }) {
  return (
    <div className="features-container">
      <ul className="features-list">
        {features.map(element => <Feature feature={element} key={element} />)}
      </ul>
    </div>
  );
}

Feature.propTypes = {
  feature: string.isRequired,
};

FeaturesList.propTypes = {
  features: arrayOf(string).isRequired,
};
