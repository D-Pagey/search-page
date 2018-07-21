import React from 'react';

import './index.css';
import Banner from './Banner';
import MainHeading from './MainHeading';
import SliderBlock from './SliderBlock';
import VehicleList from './VehicleList';
import Pagination from './Pagination';
import NoVehicles from './NoVehicles';

export default function Search() {
  return (
    <main className="search-container">
      <Banner />
      <MainHeading />
      <SliderBlock />
      <VehicleList />
      <Pagination />
      <NoVehicles />
    </main>
  );
}
