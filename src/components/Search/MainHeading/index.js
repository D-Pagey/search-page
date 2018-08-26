import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainHeadingWrapper = styled.div`
  padding: 15px 0;
`;

const MainHeadingTitle = styled.h2`
  line-height: 1.1;
  margin: 0;
`;

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
