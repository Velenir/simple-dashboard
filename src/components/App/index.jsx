import React, { PureComponent } from 'react';
import './App.scss';
import Dashboard from '../Dashboard';
import Modal from '../Modal';
import AddWidgetAside from '../AddWidgetAside';
import AddWidgetMain from '../AddWidgetMain';
import EditWidgetMain from '../EditWidgetMain';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal title='Modal Title' aside={AddWidgetAside} main={AddWidgetMain} open={false} />
        <Modal title='Modal Title' main={EditWidgetMain} mode='widget' open={false} />
        <Dashboard />
      </div>
    );
  }
}
