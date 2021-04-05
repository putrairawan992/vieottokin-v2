import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'icon';

export const Authenticated = ({ logout }) => (
  <Fragment>
    <Link to="/dashboard" className="md:mx-4 pr-4 md:pr-0 my-1 w-full md:my-0 md:w-auto">
      Dashboard
    </Link>

    <button className="flex items-center ml-auto text-blue" onClick={ logout } >
      <Icon name="power-off" size={ 12 } color="text-blue-light" className="mr-2" />
      Logout
    </button>
  </Fragment>
);

export const UnAuthenticated = ({ signin }) => (
  <button className="flex items-center ml-auto text-blue" onClick={ signin } >
    <Icon name="user" size={ 12 } color="text-blue-light" className="mr-2" />
    Login
  </button>
);
