import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '.';

it('should render', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
