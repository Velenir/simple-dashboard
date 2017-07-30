import React, { PureComponent } from 'react';
import './App.scss';
import Dashboard from '../Dashboard';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Dashboard />
      </div>
    );
  }
}
