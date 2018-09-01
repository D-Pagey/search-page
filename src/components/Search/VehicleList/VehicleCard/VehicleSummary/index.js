import React, { Component } from 'react';
import { string } from 'prop-types';

import {
  VehicleSummaryWrapper,
  VehicleDetails,
  VehicleTitle,
  VehicleLocation,
  VehicleAvailability,
} from './styles';

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
      <VehicleSummaryWrapper>
        <VehicleDetails>
          <VehicleTitle>{`${make} ${model} ${engine}`}</VehicleTitle>
          <VehicleLocation>Located in {postcode.slice(0, 3)}</VehicleLocation>
        </VehicleDetails>
        <VehicleAvailability>
          {`Available from ${this.getDay(available)} 
           ${this.getMonth(available)} 
           ${available.slice(0, 4)}`}
        </VehicleAvailability>
      </VehicleSummaryWrapper>
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
