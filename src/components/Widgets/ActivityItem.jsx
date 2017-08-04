import React from 'react';
import Progress from './Progress';
import { avatars } from '../../store/constants';

const ActivityItem = ({ name, lastname, img, daily, weekly, monthly, index }) => (
  <div className='activity-item'>
    <img src={img || avatars[index]} alt='avatar' className='activity-item__avatar' />
    <span className='activity-item__name'>{name} {lastname}</span>
    <Progress daily={daily} weekly={weekly} monthly={monthly} className='activity-item' />
  </div>
);

export default ActivityItem;
