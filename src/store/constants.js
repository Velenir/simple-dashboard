import usersActivityWidgetPicture from '../assets/users activity widget picture.png';
import userAvatar1 from '../assets/user avatar 1.png';
import userAvatar2 from '../assets/User Avatar 2.png';
import userAvatar3 from '../assets/User Avatar 3.png';
import userAvatar4 from '../assets/User Avatar 4.png';
import userAvatar5 from '../assets/User Avatar 5.png';

export const NUM_OF_PANELS = 6;

export const previewWidgets = {
  1: {
    id: 1,
    title: 'User Activity',
    description: `Users who worked more or less than their minimum hours
    required daily, weekly and monthly.`,
    by: 'TimeDoctor',
    variables: ['USERS', 'WEBSITES', 'APPS', 'TIME', 'DATE'],
    icon: usersActivityWidgetPicture
  },
  2: {
    id: 2,
    title: 'Hours Tracked',
    description: 'Total hours worked monthly, weekly, daily by Users.',
    by: 'TimeDoctor',
    variables: ['USERS', 'DATE']
  },
  3: {
    id: 3,
    title: 'Top Mobile Users',
    description: 'Shows you highest and lowest productive hours of users monthly, weekly, daily.',
    by: 'TimeDoctor',
    variables: ['USERS', 'HIGHEST', 'LOWEST', 'DATE']
  }
};

export const avatars = [
  userAvatar1,
  userAvatar2,
  userAvatar3,
  userAvatar4,
  userAvatar5
];
