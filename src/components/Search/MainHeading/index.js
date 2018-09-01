import React from 'react';
import PropTypes from 'prop-types';

import { MainHeadingWrapper, MainHeadingTitle } from './styles';

export default function MainHeading({ total }) {
  return (
    <MainHeadingWrapper>
      <MainHeadingTitle>
        {total} VEHICLES FOUND NEAR LONDON, UNITED KINGDOM
      </MainHeadingTitle>
    </MainHeadingWrapper>
  );
}

MainHeading.propTypes = {
  total: PropTypes.number,
};

MainHeading.defaultProps = {
  total: '',
};
