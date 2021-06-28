import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routes/AppRouter'
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import configStore from './configstore/store';

const store = configStore()
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
