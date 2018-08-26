import React from 'react';
import styled from 'styled-components';
import {
  func,
  string,
  number,
} from 'prop-types';

const FilterForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 60px;
  padding: 0 1rem;
  width: 100%;
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 1024px) {
    width: initial;
}
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
`;

const FilterLabel = styled.label`
  color: #292b2c;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 .2rem 2px;
`;

const Dropdown = styled.select`
  background-color: white;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  color: black;
  font-size: 100%;
  height: 40px;
  padding: 0 10px;
  width: 100%;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  color: black;
  font-size: 100%;
  height: 40px;
  padding: 0 10px;
  width: 100%;
`;

const BackToSearchWrapper = styled.div`
  align-items: center;
  background-color: #172B24;
  display: flex;
  height: 52px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const BackToSearchText = styled.p`
  color: white;
  margin-left: 10px;
`;

const Chevron = styled.svg`
  margin-left: 20px;
`;

/* eslint-disable */
const FilterWrapper = styled.div`
  display: ${props => props.className === 'hide' ? 'none' : 'block'};
  width: 100%;
  @media (min-width: 1024px) {
    display: block;
    margin-left: 32px;
    width: 25%;
  }
`;
/* eslint-enable */

export default function Filter({
  toggle,
  handleChange,
  className,
  vehicleType,
  location,
  start,
  distance,
  price,
  vehicleMake,
  transmission,
  seats,
  year,
  fuel,
  bodyType,
}) {
  return (
    <FilterWrapper className={className}>
      <BackToSearchWrapper>
        <Chevron onClick={toggle} id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 43.41" width="20px" height="20px"><title>white_chevron</title><rect x="-29.83" y="-19.96" width="83.33" height="83.33" rx="41.67" ry="41.67" fill="none" /><polyline points="21.17 1.71 11.83 11.71 2.5 21.71 11.83 31.71 21.17 41.71" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="5px" /></Chevron>
        <BackToSearchText>Back to your search results</BackToSearchText>
      </BackToSearchWrapper>

      <FilterForm>
        <InputGroup>
          <FilterLabel htmlFor="vehicle_type">
            Vehicle Type
          </FilterLabel>
          <Dropdown
            type="text"
            id="vehicle-type"
            name="vehicle_type"
            onChange={handleChange}
            defaultValue={vehicleType}
          >
            <option value="Consumer">Consumer</option>
            <option value="PCO">Private</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="location">
            Location
          </FilterLabel>
          <Input
            type="text"
            required
            id="location"
            name="location"
            className="filter-input"
            placeholder="Enter your location"
            onChange={handleChange}
            value={location}
          />
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="start">
            Subscription starts within the
          </FilterLabel>
          <Dropdown
            type="text"
            id="start"
            name="subscription_start_days"
            onChange={handleChange}
            defaultValue={start}
          >
            <option value="2">Next 2 Days</option>
            <option value="14">Next 14 Days</option>
            <option value="30">Next 30 Days</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="distance">
            Distance (radius in miles)
          </FilterLabel>
          <Dropdown
            type="text"
            id="distance"
            name="max_distance"
            onChange={handleChange}
            defaultValue={distance}
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="9999">Nationwide</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="budget">
            Monthly Budget
          </FilterLabel>
          <Dropdown
            type="text"
            id="budget"
            name="price_max"
            onChange={handleChange}
            defaultValue={price}
          >
            <option value="200">Under £200</option>
            <option value="500">Under £500</option>
            <option value="750">Under £750</option>
            <option value="1000">Under £1000</option>
            <option value="1500">Under £1500</option>
            <option value="2500">Under £2500</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="vehicle_make">
            Vehicle Make
          </FilterLabel>
          <Dropdown
            type="text"
            id="vehicle_make"
            name="vehicle_make"
            onChange={handleChange}
            defaultValue={vehicleMake}
          >
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Citroen">Citroen</option>
            <option value="Fiat">Fiat</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Nissan">Nissan</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Toyota">Toyota</option>
            <option value="Vauxhall">Vauxhall</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="gearbox">
            Gearbox
          </FilterLabel>
          <Dropdown
            type="text"
            id="gearbox"
            name="transmission"
            onChange={handleChange}
            defaultValue={transmission}
          >
            <option value="automatic">Automatic</option>
            <option value="cvt">Cvt</option>
            <option value="manual">Manual</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="seats">
            Minimum number of seats
          </FilterLabel>
          <Dropdown
            type="text"
            id="seats"
            name="number_of_seats_min"
            onChange={handleChange}
            defaultValue={seats}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="year">
            Year
          </FilterLabel>
          <Dropdown
            type="text"
            id="year"
            name="year"
            onChange={handleChange}
            defaultValue={year}
          >
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="fuel">
            Fuel Type
          </FilterLabel>
          <Dropdown
            type="text"
            id="fuel"
            name="fuel"
            onChange={handleChange}
            defaultValue={fuel}
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Petrol Hybrid</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="car-type">
            Car Type
          </FilterLabel>
          <Dropdown
            type="text"
            id="car-type"
            name="tags"
          >
            <option value="compact">Compact</option>
            <option value="electric">Electric</option>
            <option value="family">Family</option>
            <option value="premium">Premium</option>
            <option value="suv">SUV</option>
          </Dropdown>
        </InputGroup>

        <InputGroup>
          <FilterLabel htmlFor="body_type">
            Body Type
          </FilterLabel>
          <Dropdown
            type="text"
            id="body_type"
            name="body_type"
            onChange={handleChange}
            defaultValue={bodyType}
          >
            <option value="convertible">Convertible</option>
            <option value="estate">Estate</option>
            <option value="hatchback">Hatchback</option>
            <option value="saloon">Saloon</option>
            <option value="suv">SUVs</option>
          </Dropdown>
        </InputGroup>
      </FilterForm>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  toggle: func.isRequired,
  handleChange: func.isRequired,
  className: string,
  vehicleMake: string,
  location: string,
  start: number,
  vehicleType: string,
  price: number,
  year: number,
  fuel: string,
  seats: number,
  bodyType: string,
  transmission: string,
  distance: number,
};

Filter.defaultProps = {
  className: 'filter-container',
  vehicleMake: '',
  location: '',
  start: 0,
  vehicleType: '',
  price: 0,
  year: 0,
  fuel: '',
  seats: 0,
  bodyType: '',
  transmission: '',
  distance: 0,
};
