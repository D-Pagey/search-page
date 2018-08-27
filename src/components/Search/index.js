import React from 'react';
import styled from 'styled-components';
import {
  objectOf,
  arrayOf,
  any,
  func,
  bool,
  number,
} from 'prop-types';

import MainHeading from './MainHeading';
import SliderBlock from './SliderBlock';
import VehicleList from './VehicleList';
import Pagination from './Pagination';
import NoVehicles from './NoVehicles';

/* eslint-disable */
const SearchWrapper = styled.main`
  align-items: center;
  display: ${props => props.hide ? 'none' : 'flex'};
  flex-direction: column;
  padding: 0 15px;
  @media (min-width: 768px) {
    width: 690px;
  }
  @media (min-width: 1024px) {
    padding: 0 15px;
    width: 700px;
  }
`;
/* eslint-enable */

export default function Search({
  data,
  handleChange,
  userParams,
  fetchData,
  total,
  page,
  perPage,
  hide,
}) {
  return (
    <SearchWrapper hide={hide}>
      <MainHeading total={total} />
      <SliderBlock
        fetchData={fetchData}
        handleChange={handleChange}
        userParams={userParams}
        rentalOption={userParams.rental_option}
        vehicleType={userParams.vehicle_type}
        months={userParams.number_of_months}
      />
      <VehicleList data={data} type={userParams.vehicle_type} />
      <Pagination
        total={total}
        currentPage={page}
        numberPerPage={perPage}
        handleChange={handleChange}
        fetchData={fetchData}
      />
      <NoVehicles />
    </SearchWrapper>
  );
}

Search.propTypes = {
  data: arrayOf(any),
  handleChange: func.isRequired,
  userParams: objectOf(any).isRequired,
  fetchData: func.isRequired,
  total: number.isRequired,
  page: number.isRequired,
  perPage: number.isRequired,
  hide: bool.isRequired,
};

Search.defaultProps = {
  data: [],
};
