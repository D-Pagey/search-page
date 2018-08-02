import React, { Component } from 'react';
import { objectOf, any } from 'prop-types';

import './index.css';

export default class VehicleSummary extends Component {
  static propTypes = {
    data: objectOf(any).isRequired,
  }

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
    const { data } = this.props;
    const { 
      vehicle_make,
      vehicle_model,
      engine_size_information,
      postcode,
      available_start_date,
    } = data;

    return (
      <div className="vehicle-summary">
        <div className="vehicle-details">
          <h3 className="vehicle-make">
            {`${vehicle_make} ${vehicle_model} 
            ${engine_size_information}`}
          </h3>
          <p className="vehicle-location">
          Located in {postcode.slice(0, 3)}
          </p>
        </div>
        <p className="vehicle-availability">
          {`Available from ${this.getDay(available_start_date)} 
           ${this.getMonth(available_start_date)} 
           ${available_start_date.slice(0, 4)}`}
        </p>
      </div>
    );
  }
}
