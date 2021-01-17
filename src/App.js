import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterManager from 'router';
import { setCurrentUser, logoutUser } from 'store/actions/Auth';
import store from 'store';
import jwtDecode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwtDecode(token);

  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
  }
}

const App = () => (
	<BrowserRouter>
		<RouterManager />
	</BrowserRouter>
);

export default App;
