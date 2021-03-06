import React from 'react';
import { shallow } from 'enzyme';
import Search from '.';

it('should render', () => {
  const wrapper = shallow(<Search 
    results={{}}
    handleChange={() => {}}
    userParams={{}}
    fetchData={() => {}}
    metadata={{}}
    className={'hide'}
    />);
  expect(wrapper).toMatchSnapshot();
});
