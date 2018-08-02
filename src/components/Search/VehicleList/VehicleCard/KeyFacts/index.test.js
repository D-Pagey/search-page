import React from 'react';
import { shallow } from 'enzyme';
import KeyFacts from '.';

it('should render', () => {
  const wrapper = shallow(<KeyFacts data={{}} />);
  expect(wrapper).toMatchSnapshot();
});
