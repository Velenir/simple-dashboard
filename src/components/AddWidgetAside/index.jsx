import React from 'react';
import { connect } from 'react-redux';
import SearchInput from '../SearchInput';
import AsideTab from '../AsideTab';
import { changeAddWidgetTab, changeAddWidgetFilter } from '../../store/actions';
import './Aside.scss';

import widgetdirectoryIconDefault from '../../assets/Widgetdirectory - icon - default.svg';
import widgetdirectoryIconSelected from '../../assets/Widgetdirectory - icon - selected.svg';

import mywidgetIconDefault from '../../assets/Mywidget - icon - default.svg';
import mywidgetIconSelected from '../../assets/Mywidget - icon - selected.svg';


const AddWidgetAside = ({ active, changeAddWidgetTab, changeAddWidgetFilter }) => (
  <div className='add-widget__aside aside'>
    <SearchInput className='aside__search' onChange={changeAddWidgetFilter} />
    <AsideTab
      selected={active === 'available'}
      name='available'
      onClick={changeAddWidgetTab}
      icon={widgetdirectoryIconDefault}
      iconSelected={widgetdirectoryIconSelected}
    >
      Widget Directory
    </AsideTab>
    <AsideTab
      selected={active === 'added'}
      name='added'
      onClick={changeAddWidgetTab}
      icon={mywidgetIconDefault}
      iconSelected={mywidgetIconSelected}
    >
      My Widget
    </AsideTab>
  </div>
);

const mapStateToProps = ({ adding }) => ({
  active: adding.active
});

const mapDispatchToProps = (dispatch) => ({
  changeAddWidgetTab: (...args) => dispatch(changeAddWidgetTab(...args)),
  changeAddWidgetFilter: (e) => dispatch(changeAddWidgetFilter(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetAside);
