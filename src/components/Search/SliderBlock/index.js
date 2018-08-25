import React from 'react';
import {
  func, objectOf, any, string, number,
} from 'prop-types';

import './index.css';
import Button from '../../Button';

export default function SliderBlock({
  handleChange,
  userParams,
  fetchData,
  rentalOption,
  vehicleType,
  months,
}) {
  return (
    <div className="slider-block">
      <p className="subscription-title">Choose your subscription type:</p>
      <form className="subscription-form">
        <div className="rental-options">
          <input
            type="radio"
            name="rental_option"
            id="1"
            value="monthly"
            className="radio"
            onClick={handleChange}
            defaultChecked={rentalOption === 'monthly'}
          />
          <label className="subscription-label" htmlFor="1">
            Monthly Rolling Subscription (cancel or swap monthly)
          </label>
        </div>

        <div className="rental-options">
          <div className="select-input-wrapper">
            <input
              type="radio"
              name="rental_option"
              id="2"
              value="commitment"
              className="radio"
              onClick={handleChange}
              defaultChecked={rentalOption === 'commitment'}
            />
          </div>
          <label className="subscription-label" htmlFor="2">
          Minimum Commitment Subscriptions (get discounts!)
          </label>
        </div>

        <div className="duration-container">
          <label
            className="duration-title"
            htmlFor="duration"
          >
            Subscription Duration
          </label>
          <div className="length">
            <select
              id="duration"
              className="months"
              defaultValue={months}
              name="number_of_months"
              onChange={handleChange}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <span>{vehicleType === 'Consumer' ? 'months' : 'weeks'}</span>
          </div>
        </div>

        <Button onClick={() => fetchData(userParams)}>Submit</Button>
      </form>
    </div>
  );
}

SliderBlock.propTypes = {
  handleChange: func.isRequired,
  userParams: objectOf(any).isRequired,
  fetchData: func.isRequired,
  vehicleType: string.isRequired,
  rentalOption: string.isRequired,
  months: number.isRequired,
};
