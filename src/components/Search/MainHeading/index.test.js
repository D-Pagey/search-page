import React from 'react';
import { shallow } from 'enzyme';
import MainHeading from '.';

it('should render', () => {
  const wrapper = shallow(<MainHeading />);
  expect(wrapper).toMatchSnapshot();
});
