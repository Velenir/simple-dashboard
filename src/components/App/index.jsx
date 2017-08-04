import React, { PureComponent } from 'react';
import './App.scss';
import Dashboard from '../Dashboard';
import Modal from '../Modal';


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal />
        <Dashboard />
      </div>
    );
  }
}
