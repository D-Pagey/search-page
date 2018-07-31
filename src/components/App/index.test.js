import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

xit('should render', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

// mock the fetch request