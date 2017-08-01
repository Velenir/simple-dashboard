import React from 'react';
import Progress from './Progress';

import userAvatar1 from '../../assets/user avatar 1.png';
import userAvatar2 from '../../assets/User Avatar 2.png';
import userAvatar3 from '../../assets/User Avatar 3.png';
import userAvatar4 from '../../assets/User Avatar 4.png';
import userAvatar5 from '../../assets/User Avatar 5.png';

const avatars = [
  userAvatar1,
  userAvatar2,
  userAvatar3,
  userAvatar4,
  userAvatar5
];

const Percentages = ({ name, lastname, img, daily, weekly, monthly, index }) => (
  <div className='activity-item'>
    <img src={img || avatars[index]} alt='avatar' className='activity-item__avatar' />
    <span className='activity-item__name'>{name} {lastname}</span>
    <Progress daily={daily} weekly={weekly} monthly={monthly} className='activity-item' />
  </div>
);

export default Percentages;
