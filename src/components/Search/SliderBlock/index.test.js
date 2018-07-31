import React from 'react';
import { shallow } from 'enzyme';
import SliderBlock from '.';

it('should render', () => {
  const wrapper = shallow(<SliderBlock 
    fetchData={() => {}}
    handleChange={() => {}}
    userParams={{
      rental_option: 'monthly',
      number_of_months: 12,
      vehicle_type: 'Consumer',
    }}
    />);
  expect(wrapper).toMatchSnapshot();
});
