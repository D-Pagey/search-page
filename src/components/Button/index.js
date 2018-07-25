import React from 'react';
import { string, func } from 'prop-types';

import './index.css';

export default function Button({ children, onClick = undefined }) {
  return (
    <div className="button-div">
      <button type="button" className="button" onClick={onClick}>{children}</button>
    </div>
  );
}

Button.propTypes = {
  children: string,
  onClick: func,
};

Button.defaultProps = {
  children: '',
  onClick: null,
};
