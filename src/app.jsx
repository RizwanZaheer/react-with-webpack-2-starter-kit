import React from 'react';
import ReactDOM from 'react-dom';

import CustomRoutes from './config/routes';

import './style/app.scss';

const bootload = require('bootstrap-loader');

ReactDOM.render(
  <CustomRoutes />,
  document.getElementById('app'),
);
