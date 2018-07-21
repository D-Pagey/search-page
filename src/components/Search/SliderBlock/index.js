import React from 'react';

import './index.css';

export default function SliderBlock() {
  return (
    <div className="slider-block">
      <p className="subscription-title">Choose your subscription type:</p>
      <form className="subscription-form">
        <div className="rental-options">
          <div className="select-input-wrapper">
            <input type="radio" name="type-of-booking" id="1" value="on" />
            <span className="checkmark" />
          </div>
          <label className="label" htmlFor="1">
            Monthly Rolling Subscription (cancel or swap monthly)
          </label>
        </div>

        <div className="rental-options">
          <div className="select-input-wrapper">
            <input type="radio" name="type-of-booking" id="2" value="on" />
            <span className="checkmark" />
          </div>
          <label className="label" htmlFor="2">
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
            <select id="duration" className="months">
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

        <button type="button" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
