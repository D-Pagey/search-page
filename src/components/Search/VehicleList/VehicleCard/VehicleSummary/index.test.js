import React from 'react';
import { shallow } from 'enzyme';
import VehicleSummary from '.';

it('should render', () => {
  const wrapper = shallow(<VehicleSummary data={{}} />);
  expect(wrapper).toMatchSnapshot();
});
