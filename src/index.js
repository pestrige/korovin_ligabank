import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import App from './components/app/app';
import { store } from './store/store';
import { fetchRates } from './store/action';

store.dispatch(fetchRates(new Date()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
