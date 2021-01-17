import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const appLayout = props => (
    <Fragment>
      <Component {...props} />
    </Fragment>
  );

  return (
    <Route
      {...rest}
      render={props => (
        auth.isAuthenticated ? appLayout(props) : <Redirect to='/' />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
