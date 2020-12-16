import React, { Fragment } from 'react';
import PrivateRoute from 'utils/privateRoute';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Navbar } from 'lib/components';
import ARPage from 'pages/AR';
import ARCreate from 'pages/ARCreate';
import ARUpdate from 'pages/ARUpdate';
import Login from 'pages/Login';
import MyProject from 'pages/MyProject';
import SearchResult from 'pages/SearchResult';

const RouterManager = withRouter(({ location }) => (
  <Fragment>
    { location.pathname !== '/login' && <Navbar /> }
    <Route exact path='/login' component={Login} />

    <Switch>
      <PrivateRoute exact path='/' component={ARPage} />
      <PrivateRoute path='/ar' component={ARPage} />
      <PrivateRoute path='/ar-create' component={ARCreate} />
      <PrivateRoute path='/ar-update' component={ARUpdate} />
      <PrivateRoute path='/my-project' component={MyProject} />
      <PrivateRoute path='/search/:term' component={SearchResult} />
    </Switch>
  </Fragment>
));

export default RouterManager;
