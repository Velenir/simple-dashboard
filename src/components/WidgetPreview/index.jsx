import React, { PureComponent } from 'react';
import Button from '../Button';
import addWidgetIcon from '../../assets/addwidget - icon.svg';
import removeWidgetIcon from '../../assets/Removewidget - icon.svg';
import './WidgetPreview.scss';

import Placeholder from '../Placeholder';


class WidgetPreview extends PureComponent {
  add = () => {
    const { id, add } = this.props;
    add(id);
  }

  remove = () => {
    const { id, remove } = this.props;
    remove(id);
  }

  render() {
    const { title, description, by, variables, icon, active } = this.props;
    return (
      <div className='widget-preview'>
        <div className='widget-preview__icon'>
          {icon ? <img className='widget-preview__icon__img' src={icon} alt='' /> : <Placeholder style={{ height: '90%' }} />}
        </div>
        <div className='widget-preview__content'>
          <span className='widget-preview__title'>{title}</span>
          {active === 'available' && <span className='widget-preview__by'>By {by}</span>}
          <p className='widget-preview__description'>{description}</p>
          {active === 'added' && <div className='widget-preview__variables'>
            Variables: {variables.map((v) => <span key={v} className='widget-preview__variable'>{v}</span>)}
          </div>}
        </div>
        <div className='widget-preview__controls'>
          {active === 'available'
            && <Button className='widget-preview__button button--add-widget' icon={addWidgetIcon} onClick={this.add}>
              Add Widget
            </Button>
          }
          {active === 'added'
            && <Button className='widget-preview__button button--remove-widget' icon={removeWidgetIcon} onClick={this.remove}>
              Remove Widget
            </Button>
          }
        </div>
      </div>
    );
  }
}

export default WidgetPreview;
