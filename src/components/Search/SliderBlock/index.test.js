import React from 'react';
import { shallow } from 'enzyme';
import SliderBlock from '.';

it('should render', () => {
  const wrapper = shallow(<SliderBlock />);
  expect(wrapper).toMatchSnapshot();
});
