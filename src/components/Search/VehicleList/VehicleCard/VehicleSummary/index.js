import React, { Component } from 'react';
import { string } from 'prop-types';

import './index.css';

export default class VehicleSummary extends Component {
  getDay = (date) => {
    const day = date.slice(8);

    if (day.charAt(0) === '0') {
      return day.slice(1);
    }
    return day;
  }

  getMonth = (date) => {
    const month = date.slice(5, 7);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    if (month.charAt(0) === 0) {
      return monthNames(parseInt(month.slice(1), 10) - 1);
    }
    return monthNames[parseInt(month, 10) - 1];
  }

  render() {
    const {
      make,
      model,
      engine,
      postcode,
      available,
    } = this.props;

    return (
      <div className="vehicle-summary">
        <div className="vehicle-details">
          <h3 className="vehicle-make">
            {`${make} ${model} 
            ${engine}`}
          </h3>
          <p className="vehicle-location">
          Located in {postcode.slice(0, 3)}
          </p>
        </div>
        <p className="vehicle-availability">
          {`Available from ${this.getDay(available)} 
           ${this.getMonth(available)} 
           ${available.slice(0, 4)}`}
        </p>
      </div>
    );
  }
}

VehicleSummary.propTypes = {
  make: string.isRequired,
  postcode: string.isRequired,
  engine: string,
  model: string.isRequired,
  available: string.isRequired,
};

VehicleSummary.defaultProps = {
  engine: '',
};
