import React from 'react';

import './index.css';
import Button from '../../Button';

export default function NoVehicles() {
  return (
    <div className="no-vehicles-container">
      <div>
        <h3 className="no-vehicles-title">looking for a specific car?</h3>
        <p>Let us know what car you are looking for, and we&apos;ll be in touch!</p>
      </div>
      <form className="no-vehicles-form">
        <div className="form-group">
          <label htmlFor="fullname" className="no-vehicles-label">Full Name</label>
          <input
            type="text"
            required
            id="fullname"
            name="fullname"
            className="form-input"
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="no-vehicles-label">Email address</label>
          <input
            type="email"
            required
            id="email"
            name="email"
            className="form-input"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time-frame" className="no-vehicles-label">
          When do you want a car?
          </label>
          <select
            type="text"
            required
            id="time-frame"
            name="time-frame"
            className="form-input"
            placeholder="example@gmail.com"
          >
            <option value="this-month">This Month</option>
            <option value="3-months">Within 3 Months</option>
            <option value="6-months">Within 6 Months</option>
            <option value="more-6-months">6 Months +</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notes" className="no-vehicles-label">
          What are you looking for?
          </label>
          <input
            type="text"
            id="notes"
            name="notes"
            className="form-input"
            placeholder="A White BMW M3"
          />
        </div>
        <div className="form-group row">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="checkbox"
          />
          <label htmlFor="checkbox" className="updates-copy">I would like to
          receive updates about discounts, special offers, news and events from Drover.
          </label>
        </div>
        <Button text="Find my car" />
      </form>
    </div>
  );
}
