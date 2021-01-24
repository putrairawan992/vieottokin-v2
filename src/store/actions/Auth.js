import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../types';
// import store from 'store';
// import { setLoading } from 'store/actions/Loading';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER, payload: decoded
});

export const loginUser = userData => dispatch => {
  // store.dispatch(setLoading(true));

  axios.post(`${process.env.REACT_APP_API_HOST}login`, userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      setAuthToken(token);

      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      // store.dispatch(setLoading(false));
      if (decoded) {
        window.location.reload();
      }

      return true;
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};