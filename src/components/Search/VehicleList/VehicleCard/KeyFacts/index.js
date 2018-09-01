import React from 'react';
import { number, string } from 'prop-types';

import { KeyFactsWrapper, KeyFactsList, KeyFactsItem } from './styles';

export default function KeyFacts({
  year,
  fuel,
  mpg,
  body,
  seats,
  color,
  transmission,
  doors,
}) {
  return (
    <KeyFactsWrapper>
      <KeyFactsList>
        <KeyFactsItem>{year}</KeyFactsItem>
        <KeyFactsItem>{fuel}</KeyFactsItem>
        <KeyFactsItem>{mpg} MPG</KeyFactsItem>
      </KeyFactsList>
      <KeyFactsList>
        <KeyFactsItem>{body}</KeyFactsItem>
        <KeyFactsItem>{seats} Seats</KeyFactsItem>
        <KeyFactsItem>{color}</KeyFactsItem>
      </KeyFactsList>
      <KeyFactsList>
        <KeyFactsItem>{transmission}</KeyFactsItem>
        <KeyFactsItem>{doors} Doors</KeyFactsItem>
      </KeyFactsList>
    </KeyFactsWrapper>
  );
}

KeyFacts.propTypes = {
  year: string.isRequired,
  fuel: string.isRequired,
  mpg: number.isRequired,
  body: string.isRequired,
  seats: number.isRequired,
  color: string.isRequired,
  transmission: string.isRequired,
  doors: number.isRequired,
};
