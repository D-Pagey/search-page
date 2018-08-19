import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 100%;
  `;

const Btn = styled.button`
  background-color: #50ff7d;
  border: 0;
  border-radius: 6px;
  font-size: .95rem;
  font-weight: bold;
  height: 40px;
  margin: 5px 0;
  padding: 10px;
  width: 100%;

  @media (min-width: 768px) {
    width: initial;
  }
`;

export default function Button({ children, onClick }) {
  return (
    <ButtonWrapper>
      <Btn type="Btn" onClick={onClick}>{children}</Btn>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: string,
  onClick: func,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
};
