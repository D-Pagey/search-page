import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '.';

it('should render', () => {
  const wrapper = shallow(<Pagination />);
  expect(wrapper).toMatchSnapshot();
});
