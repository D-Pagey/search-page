import React from 'react';
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

export default function Search(props) {
  const {
    results,
    handleChange,
    userParams,
    fetchData,
    metadata,
    className,
  } = props;

  return (
    <main className={className}>
      <MainHeading count={metadata} />
      <SliderBlock
        fetchData={fetchData}
        handleChange={handleChange}
        userParams={userParams}
      />
      <VehicleList results={results} userParams={userParams} />
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
