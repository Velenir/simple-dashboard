import React from 'react';
import './Panel.scss';

const Panel = ({ children }) => (
  <div className='board__panel panel'>
    {children || <span className='panel__placeholder'>Drop Here</span>}
  </div>
);

export default Panel;
