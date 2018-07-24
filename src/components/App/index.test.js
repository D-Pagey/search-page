import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

it('should render', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

// update ESLint for Jest .test files
