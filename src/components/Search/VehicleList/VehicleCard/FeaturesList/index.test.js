import React from 'react';
import { shallow } from 'enzyme';
import FeaturesList from '.';

it('should render', () => {
  const wrapper = shallow(<FeaturesList features={[]} />);
  expect(wrapper).toMatchSnapshot();
});
