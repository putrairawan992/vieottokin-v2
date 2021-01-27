import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterManager from 'router';
import { setCurrentUser, logoutUser } from 'store/actions/Auth';
import store from 'store';
import jwtDecode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import { read } from 'utils/api';

if (localStorage.getItem('@viettonkin:token')) {
  const token = localStorage.getItem('@viettonkin:token');
  const decoded = jwtDecode(token);

  setAuthToken(token);
  store.dispatch(setCurrentUser(decoded));

  if (decoded.exp < Date.now() / 1000) {
    store.dispatch(logoutUser());
  }
};

if (!localStorage.getItem('@viettonkin:categories')) {
  read('categories').then(res => {
    let categories = [];
    res.data.map(({ SubCategory }) => categories.push(...SubCategory));
    localStorage.setItem('@viettonkin:categories', JSON.stringify(categories));
  });
};

if (!localStorage.getItem('@viettonkin:countries')) {
  read('countries').then(res => localStorage.setItem('@viettonkin:countries', JSON.stringify(res.data)));
};

const App = () => (
	<BrowserRouter>
		<RouterManager />
	</BrowserRouter>
);

export default App;
