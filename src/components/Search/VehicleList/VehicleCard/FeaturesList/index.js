import React from 'react';

import './index.css';
import titleCase from '../../../../../utils/capitalize';

function Feature({ feature }) {
  const formatted = titleCase(feature.replace(/_/g, ' '));

  return (
    <li className="feature">{formatted} •</li>
  );
}

export default function FeaturesList({ features }) {
  const listOfFeatures = features.map(element => <Feature feature={element} />);

  return (
    <div className="features-container">
      <ul className="features-list">
        {listOfFeatures}
      </ul>
    </div>
  );
}
