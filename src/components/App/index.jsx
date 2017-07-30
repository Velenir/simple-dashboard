import React, { PureComponent } from 'react';
import './App.scss';
import Dashboard from '../Dashboard';
import Modal from '../Modal';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modal title='Modal Title' closeButton aside='some aside'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>
        <Dashboard />
      </div>
    );
  }
}
