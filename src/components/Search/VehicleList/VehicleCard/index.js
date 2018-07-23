import React, { Component } from 'react';

import './index.css';
import KeyFacts from './KeyFacts';

export default class VehicleCard extends Component {
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

    return (
      <div className="vehicle-card">
        <img
          src={data.images[0].image_url}
          alt="Car"
          className="vehicle-img"
        />
        <div className="vehicle-summary">
          <div className="vehicle-details">
            <h3 className="vehicle-make">
              {`${data.vehicle_make} ${data.vehicle_model.toLowerCase()} 
              ${data.engine_size_information}`}
            </h3>
            <p className="vehicle-location">
            Located in {data.postcode.slice(0, 3)}
            </p>
          </div>
          <p className="vehicle-availability">
            {`Available from ${this.getDay(data.available_start_date)} 
            ${this.getMonth(data.available_start_date)} 
            ${data.available_start_date.slice(0, 4)}`}
          </p>
        </div>
        <KeyFacts data={data} />
      </div>
    );
  }
}
