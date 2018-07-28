import React from 'react';
import {
  func,
  objectOf,
  any,
  string,
} from 'prop-types';

import './index.css';

// To Do: take user's input above into state to append to fetch url

export default function Filter({
  toggle,
  handleChange,
  defaultValue,
  className,
}) {
  return (
    <div className={className}>
      <div className="back-to-search-div">
        <svg className="chevron" onClick={toggle} id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 43.41" width="20px" height="20px"><title>white_chevron</title><rect x="-29.83" y="-19.96" width="83.33" height="83.33" rx="41.67" ry="41.67" fill="none" /><polyline points="21.17 1.71 11.83 11.71 2.5 21.71 11.83 31.71 21.17 41.71" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="5px" /></svg>
        <p className="back-to-search">Back to your search results</p>
      </div>

      <form className="filter-form">
        <div className="input-group">
          <label htmlFor="location" className="filter-label">
            Location
          </label>
          <input
            type="text"
            required
            id="location"
            name="location"
            className="filter-input"
            placeholder="Enter your location"
            onChange={handleChange}
            value={defaultValue.location}
          />
        </div>

        <div className="input-group">
          <label htmlFor="start" className="filter-label">
            Subscription starts within the
          </label>
          <select
            type="text"
            id="start"
            name="subscription_start_days"
            className="filter-input dropdown"
            onChange={handleChange}
            defaultValue={defaultValue.subscription_start_days}
          >
            <option value="2">Next 2 Days</option>
            <option value="14">Next 14 Days</option>
            <option value="30">Next 30 Days</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="distance" className="filter-label">
            Distance (radius in miles)
          </label>
          <select
            type="text"
            id="distance"
            name="max_distance"
            className="filter-input dropdown"
            onChange={handleChange}
            defaultValue={defaultValue.max_distance}
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="9999">Nationwide</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="budget" className="filter-label">
            Monthly Budget
          </label>
          <select
            type="text"
            id="budget"
            name="price_max"
            className="filter-input dropdown"
            onChange={handleChange}
            defaultValue={defaultValue.price_max}
          >
            <option value="200">Under £200</option>
            <option value="500">Under £500</option>
            <option value="750">Under £750</option>
            <option value="1000">Under £1000</option>
            <option value="1500">Under £1500</option>
            <option value="2000">Under £2000</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="gearbox" className="filter-label">
            Gearbox
          </label>
          <select
            type="text"
            id="gearbox"
            name="transmission"
            className="filter-input dropdown"
            onChange={handleChange}
            defaultValue={defaultValue.transmission}
          >
            <option value="any">Any</option>
            <option value="automatic">Automatic</option>
            <option value="cvt">Cvt</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="seats" className="filter-label">
            Minimum number of seats
          </label>
          <select
            type="text"
            id="seats"
            name="number_of_seats_min"
            className="filter-input dropdown"
            onChange={handleChange}
            defaultValue={defaultValue.number_of_seats_min}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="year" className="filter-label">
            Year
          </label>
          <select
            type="text"
            id="year"
            name="year"
            className="filter-input dropdown"
            onChange={handleChange}
            defaultValue={defaultValue.year}
          >
            <option value="any">Any</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="fuel" className="filter-label">
            Fuel Type
          </label>
          <select
            type="text"
            id="fuel"
            name="fuel"
            className="filter-input dropdown"
            onChange={handleChange}
            defaultValue={defaultValue.fuel}
          >
            <option value="any">Any</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Petrol Hybrid</option>
          </select>
        </div>
      </form>
    </div>
  );
}

Filter.propTypes = {
  toggle: func.isRequired,
  handleChange: func.isRequired,
  defaultValue: objectOf(any).isRequired,
  className: string.isRequired,
};
