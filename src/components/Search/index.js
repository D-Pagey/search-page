import React from 'react';
import {
  objectOf,
  any,
  func,
  string,
  number,
} from 'prop-types';

import './index.css';
import MainHeading from './MainHeading';
import SliderBlock from './SliderBlock';
import VehicleList from './VehicleList';
import Pagination from './Pagination';
import NoVehicles from './NoVehicles';

export default function Search({
  data,
  handleChange,
  userParams,
  fetchData,
  total,
  page,
  perPage,
  className,
}) {
  return (
    <main className={className}>
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
    </main>
  );
}

Search.propTypes = {
  data: objectOf(any).isRequired,
  handleChange: func.isRequired,
  userParams: objectOf(any).isRequired,
  fetchData: func.isRequired,
  total: number.isRequired,
  page: number.isRequired,
  perPage: number.isRequired,
  className: string.isRequired,
};
