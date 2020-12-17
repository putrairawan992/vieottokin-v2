import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from 'components/Navbar';
import AboutUs from 'pages/AboutUs';

const RouterManager = () => (
  <Switch>
    <Navbar />
    <Route exact path='/' component={ AboutUs } />
  </Switch>
);

export default RouterManager;
