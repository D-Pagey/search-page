import React from 'react';
import { shallow } from 'enzyme';
import Filter from '.';

it('should render', () => {
  const wrapper = shallow(<Filter 
  toggle={() => {}}
  handleChange={() => {}}
  defaultValue={{}}
  className={'filter-container'}
  />);
  expect(wrapper).toMatchSnapshot();
});