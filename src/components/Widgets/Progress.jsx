import React from 'react';
import './Progress.scss';

const Progress = ({ value, className }) => (
  <div className={`progress ${className}`}>
    <span className='progress__bar--total' data-value={value}>
      <span className='progress__bar--filled' style={{ width: `${value}%` }} />
    </span>
    <span className='progress__value'>{Math.round(value)}%</span>
  </div>
);

Progress.defaultProps = {
  className: ''
};

export default Progress;
