import React from 'react';
import { string, func } from 'prop-types';

import { ButtonWrapper, Btn } from './styles';

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
