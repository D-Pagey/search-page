import React from 'react';

import './index.css';

export default function Button({ text, onClick = undefined }) {
  return (
    <div className="button-div">
      <button type="button" className="button" onClick={onClick}>{text}</button>
    </div>
  );
}
