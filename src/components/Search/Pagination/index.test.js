import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '.';

it('should render', () => {
  const wrapper = shallow(<Pagination 
    handleChange={() => {}}
    metadata={{
      page: 1,
      per_page: 10,
      total_count: 67,
    }}
    fetchData={() => {}}
    />);
  expect(wrapper).toMatchSnapshot();
});
