import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

const KeyFactsWrapper = styled.div`
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-around;
`;

const KeyFactsList = styled.ul`
  margin: 5px 10px 5px 0;
  padding-left: 30px;
`;

const KeyFactsItem = styled.li`
  text-transform: capitalize;
`;

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
