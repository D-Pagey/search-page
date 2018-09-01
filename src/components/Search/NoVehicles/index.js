import React from 'react';

import {
  NoVehiclesWrapper,
  NoVehiclesHeader,
  NoVehiclesTitle,
  NoVehiclesForm,
  NoVehiclesLabel,
  UpdatesCopy,
  FormInput,
  FormSelect,
  FormGroup,
} from './styles';

import Button from '../../Button';

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
