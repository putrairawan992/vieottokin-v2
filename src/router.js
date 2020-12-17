import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from 'components/Navbar';
import AboutUs from 'pages/AboutUs';

const RouterManager = () => (
  <Fragment>
    <Navbar />

    <Switch>
      <Route exact path='/' component={ AboutUs } />
    </Switch>
  </Fragment>
);

export default RouterManager;
