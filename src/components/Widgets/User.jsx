import React from 'react';

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

const Users = ({ name, lastname, img, index }) => (
  <div className='user'>
    <img src={img || avatars[index]} alt='avatar' className='user__avatar' />
    <span className='user__name'>{name} {lastname}</span>
  </div>
);

export default Users;
