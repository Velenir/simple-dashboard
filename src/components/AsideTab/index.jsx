import React, { PureComponent } from 'react';


class AsideTab extends PureComponent {
  onClick = () => {
    const { name, onClick, selected } = this.props;
    if (selected) return;
    onClick(name);
  }
  render() {
    const { icon, iconSelected, children, selected, name, onClick, ...rest } = this.props;
    return (
      <div className={`aside__tab ${selected ? 'aside__tab--selected' : ''}`} onClick={this.onClick} {...rest}>
        {selected ? <img src={iconSelected} alt='' /> : <img src={icon} alt='' />}
        { children}
      </div>
    );
  }
}

export default AsideTab;
