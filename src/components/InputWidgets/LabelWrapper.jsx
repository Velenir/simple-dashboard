import React from 'react';
import './LabelWrapper.scss';

const LabelWrapper = ({ label, forHtml, className, direction, children, ...rest }) => (
  <div className={`label-wrapper label-wrapper--${direction} ${className}`} {...rest} >
    <label htmlFor={forHtml} className='label-wrapper__label'>{label}</label>
    <div className='label-wrapper__content'>{typeof children === 'function' ? children() : children}</div>
  </div>
);

LabelWrapper.defaultProps = {
  className: '',
  direction: 'column'
};

export default LabelWrapper;
