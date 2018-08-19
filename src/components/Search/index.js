import React from 'react';
import styled from 'styled-components';
import {
  objectOf,
  any,
  func,
  string,
} from 'prop-types';

import './index.css';
import MainHeading from './MainHeading';
import SliderBlock from './SliderBlock';
import VehicleList from './VehicleList';
import Pagination from './Pagination';
import NoVehicles from './NoVehicles';

export default function Search({
  results,
  handleChange,
  userParams,
  fetchData,
  metadata,
  className,
}) {
  return (
    <main className={className}>
      <MainHeading total={metadata.total_count} />
      <SliderBlock
        fetchData={fetchData}
        handleChange={handleChange}
        userParams={userParams}
        rental_option={userParams.rental_option}
        vehicle_type={userParams.vehicle_type}
        months={userParams.number_of_months}
      />
      <VehicleList data={results} vehicle_type={userParams.vehicle_type} />
      <Pagination
        handleChange={handleChange}
        metadata={metadata}
        fetchData={fetchData}
      />
      <NoVehicles />
    </main>
  );
}

Search.propTypes = {
  handleChange: func.isRequired,
  userParams: objectOf(any).isRequired,
  metadata: objectOf(any),
  fetchData: func.isRequired,
  results: objectOf(any).isRequired,
  className: string.isRequired,
};

Search.defaultProps = {
  metadata: {},
};
