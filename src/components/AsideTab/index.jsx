import React from 'react';

const AsideTab = ({ icon, iconSelected, children, selected, ...rest }) => (
  <div className={`aside__tab ${selected ? 'aside__tab--selected' : ''}`} {...rest}>
    {selected ? <img src={iconSelected} alt='' /> : <img src={icon} alt='' />}
    { children}
  </div>
);

export default AsideTab;
