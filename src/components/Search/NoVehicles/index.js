import React from 'react';
import styled from 'styled-components';

import './index.css';
import Button from '../../Button';

const NoVehiclesWrapper = styled.div`
  background-color: white;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  margin-bottom: 40px;
  padding: 16px;
  @media (min-width: 768px) {
    width: 690px;
  }
`;

const NoVehiclesHeader = styled.div`
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 98%;
  }
`;

const NoVehiclesTitle = styled.h3`
  font-size: 28px;
  letter-spacing: -1.2px;
  line-height: 1.1;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

const NoVehiclesForm = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NoVehiclesLabel = styled.label`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const UpdatesCopy = styled.p`
  padding-left: 20px;
`;

const FormInput = styled.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  font-size: 1rem;
`;

const FormSelect = styled.select`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  font-size: 1rem;
`;

/* eslint-disable */
const FormGroup = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  margin-bottom: 10px;
  @media (min-width: 768px) {
    &:nth-of-type(2) {
        margin: 0 10px;
    }

    &:nth-of-type(4) {
        width: 98%;
    }
  }
`;
/* eslint-enable */

export default function NoVehicles() {
  return (
    <NoVehiclesWrapper>
      <NoVehiclesHeader>
        <NoVehiclesTitle>looking for a specific car?</NoVehiclesTitle>
        <p>Let us know what car you are looking for, and we&apos;ll be in touch!</p>
      </NoVehiclesHeader>
      <NoVehiclesForm>
        <FormGroup>
          <NoVehiclesLabel htmlFor="fullname">Full Name</NoVehiclesLabel>
          <FormInput
            type="text"
            required
            id="fullname"
            name="fullname"
            placeholder="John Doe"
          />
        </FormGroup>
        <FormGroup>
          <NoVehiclesLabel htmlFor="email">Email address</NoVehiclesLabel>
          <FormInput
            type="email"
            required
            id="email"
            name="email"
            placeholder="example@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <NoVehiclesLabel htmlFor="time-frame">
          When do you want a car?
          </NoVehiclesLabel>
          <FormSelect
            type="text"
            required
            id="time-frame"
            name="time-frame"
            placeholder="example@gmail.com"
          >
            <option value="this-month">This Month</option>
            <option value="3-months">Within 3 Months</option>
            <option value="6-months">Within 6 Months</option>
            <option value="more-6-months">6 Months +</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <NoVehiclesLabel htmlFor="notes">
          What are you looking for?
          </NoVehiclesLabel>
          <FormInput
            type="text"
            id="notes"
            name="notes"
            placeholder="A White BMW M3"
          />
        </FormGroup>
        <FormGroup row>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
          />
          <UpdatesCopy htmlFor="checkbox">I would like to
          receive updates about discounts, special offers, news and events from Drover.
          </UpdatesCopy>
        </FormGroup>
        <Button>Find my car</Button>
      </NoVehiclesForm>
    </NoVehiclesWrapper>
  );
}
