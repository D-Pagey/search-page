import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

it('should render', () => {
  const wrapper = shallow(<Button>Test</Button>);
  expect(wrapper).toMatchSnapshot();
});
