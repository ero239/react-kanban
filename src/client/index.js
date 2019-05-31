import 'babel-polyfill';
import 'whatwg-fetch';

import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './style.scss';

if (!window.Intl) {
  window.Intl = intl;
}

/* api.setEndpoint('/api'); */

ReactDOM.render(<App />, document.getElementById('app'));
