import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterManager from 'router';
import { setCurrentUser, logoutUser } from 'store/actions/Auth';
import store from 'store';
import jwtDecode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';

if (localStorage.getItem('@viettonkin:token')) {
  const token = localStorage.getItem('@viettonkin:token');
  const decoded = jwtDecode(token);

  setAuthToken(token);
  store.dispatch(setCurrentUser(decoded));

  if (decoded.exp < Date.now() / 1000) {
    store.dispatch(logoutUser());
  }
};

const App = () => (
	<BrowserRouter>
		<RouterManager />
	</BrowserRouter>
);

export default App;
