import React from 'react';
import { shallow } from 'enzyme';
import VehicleList from '.';

it('should render', () => {
  const wrapper = shallow(<VehicleList
    results={{}}
    userParams={{}}
  />);
  expect(wrapper).toMatchSnapshot();
});
