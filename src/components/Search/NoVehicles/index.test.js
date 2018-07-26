import React from 'react';
import { shallow } from 'enzyme';
import NoVehicles from '.';

it('should render', () => {
  const wrapper = shallow(<NoVehicles />);
  expect(wrapper).toMatchSnapshot();
});
