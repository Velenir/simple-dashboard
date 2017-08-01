import React from 'react';

const GenericInput = ({ label, id, ...rest }) => (
  <div className='input input--number'>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} {...rest} />
  </div>
);

export default GenericInput;
