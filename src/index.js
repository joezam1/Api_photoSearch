import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import Main from './modules/mainDisplayPage/Main.js';
import {Provider} from 'react-redux';
import store from './store/index.js';



ReactDOM.render((
  <Provider store={store}>
  <Main />
  </Provider>)
  ,document.getElementById('root')
);
