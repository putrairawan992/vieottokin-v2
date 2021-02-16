import axios from 'axios';
import { read } from 'utils/api';
import { setUserProfile } from 'store/actions/Auth';
import store from 'store';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.Accept = 'application/json';

    read('partners').then(res => {
      const { password, authToken, tokenExpire, roleId, ...data } = res.data;
      store.dispatch(setUserProfile(data))
    });
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
