import React from 'react';
import SearchInput from '../SearchInput';
import AsideTab from '../AsideTab';
import './Aside.scss';

import widgetdirectoryIconDefault from '../../assets/Widgetdirectory - icon - default.svg';
import widgetdirectoryIconSelected from '../../assets/Widgetdirectory - icon - selected.svg';

import mywidgetIconDefault from '../../assets/Mywidget - icon - default.svg';
import mywidgetIconSelected from '../../assets/Mywidget - icon - selected.svg';


const AddWidgetAside = () => (
  <div className='aside'>
    <SearchInput className='aside__search' />
    <AsideTab
      selected
      icon={widgetdirectoryIconDefault}
      iconSelected={widgetdirectoryIconSelected}
    >
      Widget Directory
    </AsideTab>
    <AsideTab
      icon={mywidgetIconDefault}
      iconSelected={mywidgetIconSelected}
    >
      My Widget
    </AsideTab>
  </div>
);

export default AddWidgetAside;
