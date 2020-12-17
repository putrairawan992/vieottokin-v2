import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import AboutUs from 'pages/AboutUs';
import LandingPage from 'pages/LandingPage';

const RouterManager = () => (
  <Fragment>
    <Navbar />

    <Switch>
      <Route exact path='/' component={ AboutUs } />
      <Route exact path='/landing-page' component={ LandingPage } />
    </Switch>

    <div className="">
      <Footer />
    </div>
  </Fragment>
);

export default RouterManager;
