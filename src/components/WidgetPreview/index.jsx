import React from 'react';
import Button from '../Button';
import addWidgetIcon from '../../assets/addwidget - icon.svg';
import removeWidgetIcon from '../../assets/Removewidget - icon.svg';
import './WidgetPreview.scss';

import Placeholder from '../Placeholder';

const WidgetPreview = ({ title, description, by, variables, icon }) => (
  <div className='widget-preview'>
    <div className='widget-preview__icon'>
      {icon ? <img className='widget-preview__icon__img' src={icon} alt='' /> : <Placeholder />}
    </div>
    <div className='widget-preview__content'>
      <span className='widget-preview__title'>{title}</span>
      <span className='widget-preview__by'>By {by}</span>
      <p className='widget-preview__description'>{description}</p>
      <div className='widget-preview__variables'>
        Variables: {variables.map((v) => <span key={v} className='widget-preview__variable'>{v}</span>)}
      </div>
    </div>
    <div className='widget-preview__controls'>
      <Button className='widget-preview__button button--add-widget' icon={addWidgetIcon}>
        Add Widget
      </Button>
      <Button className='widget-preview__button button--remove-widget' icon={removeWidgetIcon}>
        Remove Widget
      </Button>
    </div>
  </div>
);

export default WidgetPreview;
