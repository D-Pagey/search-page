import React from 'react';
import {
  func, objectOf, any, string, number,
} from 'prop-types';

import {
  SliderBlockWrapper,
  SubscriptionTitle,
  SubscriptionForm,
  RentalOptionsWrapper,
  RadioButton,
  SubscriptionLabel,
  DurationWrapper,
  MonthsDropdown,
  DurationTitle,
} from './styles';
import Button from '../../Button';

export default function SliderBlock({
  handleChange,
  userParams,
  fetchData,
  rentalOption,
  vehicleType,
  months,
}) {
  return (
    <SliderBlockWrapper>
      <SubscriptionTitle>Choose your subscription type:</SubscriptionTitle>
      <SubscriptionForm>
        <RentalOptionsWrapper>
          <RadioButton
            name="rental_option"
            id="1"
            value="monthly"
            onClick={handleChange}
            defaultChecked={rentalOption === 'monthly'}
          />
          <SubscriptionLabel htmlFor="1">
            Monthly Rolling Subscription (cancel or swap monthly)
          </SubscriptionLabel>
        </RentalOptionsWrapper>

        <RentalOptionsWrapper>
          <div>
            <RadioButton
              name="rental_option"
              id="2"
              value="commitment"
              onClick={handleChange}
              defaultChecked={rentalOption === 'commitment'}
            />
          </div>
          <SubscriptionLabel htmlFor="2">
          Minimum Commitment Subscriptions (get discounts!)
          </SubscriptionLabel>
        </RentalOptionsWrapper>

        <DurationWrapper>
          <DurationTitle htmlFor="duration">Subscription Duration</DurationTitle>
          <div>
            <MonthsDropdown
              id="duration"
              defaultValue={months}
              name="number_of_months"
              onChange={handleChange}
            >
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
            </MonthsDropdown>
            <span>{vehicleType === 'Consumer' ? 'months' : 'weeks'}</span>
          </div>
        </DurationWrapper>

        <Button onClick={() => fetchData(userParams)}>Submit</Button>
      </SubscriptionForm>
    </SliderBlockWrapper>
  );
}

SliderBlock.propTypes = {
  handleChange: func.isRequired,
  userParams: objectOf(any).isRequired,
  fetchData: func.isRequired,
  vehicleType: string.isRequired,
  rentalOption: string.isRequired,
  months: number.isRequired,
};
