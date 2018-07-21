import React from 'react';

import './index.css';

export default function SliderBlock() {
  return (
    <div className="subscription-container">
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

        <div className="subscription-duration">
          <p className="copy">Subscription Duration</p>
          <span>12 Months</span>
        </div>
      </form>
    </div>
  );
}
