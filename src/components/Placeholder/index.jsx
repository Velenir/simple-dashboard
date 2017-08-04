import React from 'react';
import Header from '../Header';
import SettingsButton from '../Widgets/SettingsButton';

const defaultStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#2882a0',
  backgroundColor: 'rgba(171, 153, 153, 0.24)',
  padding: 10,
  backgroundClip: 'content-box',
  border: '1px solid #dcdcdc',
  borderRadius: 10
};

const Placeholder = ({ style }) => (
  <div style={{ ...defaultStyle, ...style }}>
    Placeholder
  </div>
);

export const PlaceholderWidget = ({ id }) => (
  <div className='widget user-activity'>
    <Header title='Placeholder' className='widget__header'>
      <SettingsButton id={id} edit={false} />
    </Header>
    <div className='widget__body'>
      <Placeholder />
    </div>
  </div>
);

export default Placeholder;
