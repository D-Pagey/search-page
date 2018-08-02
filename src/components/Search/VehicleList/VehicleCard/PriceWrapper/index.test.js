import React from 'react';
import { shallow } from 'enzyme';
import PriceWrapper from '.';

it('should render', () => {
  const wrapper = shallow(<PriceWrapper 
    data={{}} 
    type="Consumer"
    time={12}
  />);
  expect(wrapper).toMatchSnapshot();
});
