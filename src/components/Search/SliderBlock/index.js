import React from 'react';
import { func, objectOf, any } from 'prop-types';

import './index.css';
import Button from '../../Button';

// To Do: Make this form functional, changing fetch request

export default function SliderBlock({ handleChange, userParams, submit }) {
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
            defaultChecked={userParams.rental_option === 'monthly'}
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
              defaultChecked={userParams.rental_option === 'commitment'}
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
              defaultValue={userParams.number_of_months}
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
            <span>months</span>
          </div>
        </div>

        <Button onClick={() => submit}>Submit</Button>
      </form>
    </div>
  );
}

SliderBlock.propTypes = {
  handleChange: func.isRequired,
  userParams: objectOf(any).isRequired,
  submit: func.isRequired,
};
