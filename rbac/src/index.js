import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { RoleProvider } from './context/RoleContext';

ReactDOM.render(
  <Provider store={store}>
    <RoleProvider>
      <App />
    </RoleProvider>
  </Provider>,
  document.getElementById('root')
);
