import React from 'react';

import './index.css';

export default function Button({ children, onClick = undefined }) {
  return (
    <div className="button-div">
      <button type="button" className="button" onClick={onClick}>{children}</button>
    </div>
  );
}
