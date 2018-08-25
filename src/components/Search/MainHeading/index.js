import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function MainHeading({ total }) {
  return (
    <div className="main-heading-container">
      <h2 className="main-heading">
        {total} VEHICLES FOUND NEAR LONDON, UNITED KINGDOM
      </h2>
    </div>
  );
}

MainHeading.propTypes = {
  total: PropTypes.number,
};

MainHeading.defaultProps = {
  total: '',
};
