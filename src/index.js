import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import { Provider } from 'react-redux';
import App from './components/App';
import createStore from './store';

const store = createStore();

const render = App =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default;
    render(App);
  });
}

render(App);
