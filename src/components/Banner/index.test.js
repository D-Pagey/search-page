import React from 'react';
import { shallow } from 'enzyme';
import Banner from '.';

it('should render', () => {
  const wrapper = shallow(<Banner />);
  expect(wrapper).toMatchSnapshot();
});
