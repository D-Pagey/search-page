import React from 'react';
import { shape, number } from 'prop-types';

import './index.css';

export default function MainHeading({ count }) {
  return (
    <div className="main-heading-container">
      <h2 className="main-heading">
        {count.total_count} VEHICLES FOUND NEAR LONDON, UNITED KINGDOM
      </h2>
    </div>
  );
}

MainHeading.propTypes = {
  count: shape({
    total_count: number,
  }),
};

MainHeading.defaultProps = {
  count: { total_count: 0 },
};
