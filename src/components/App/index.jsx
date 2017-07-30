import React, { PureComponent } from 'react';
import './App.scss';
import Dashboard from '../Dashboard';
import Modal from '../Modal';
import AddWidgetAside from '../AddWidgetAside';
import AddWidgetMain from '../AddWidgetMain';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal title='Modal Title' closeButton aside={AddWidgetAside} main={AddWidgetMain} />
        <Dashboard />
      </div>
    );
  }
}
