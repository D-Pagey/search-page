import React from 'react';
import { shallow } from 'enzyme';
import Filter from '.';

it('should render', () => {
  const wrapper = shallow(<Filter />);
  expect(wrapper).toMatchSnapshot();
});
