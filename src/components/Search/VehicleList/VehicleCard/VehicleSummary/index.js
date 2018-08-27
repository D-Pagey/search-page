import React, { Component } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const VehicleSummaryWrapper = styled.div`
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
`;

const VehicleDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0 4px 16px;
  width: 16rem;
`;

const VehicleTitle = styled.h3`
  color: black;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.2px;
  margin: 0;
`;

const VehicleLocation = styled.p`
  margin: 0;
  padding: 2px 0;
`;

const VehicleAvailability = styled.p`
  align-self: center;
  margin: 0 10px;
  text-align: center;
  width: 7.5rem;
`;

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
