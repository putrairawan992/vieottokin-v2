import axios from 'axios';
import setLoading from 'store/actions/Loading';
import { openNotification } from 'store/actions/ModalControl';
import store from 'store';

const axiosInstance = async (method, path, request) => {
  const noLoading = ['countries', 'cities', 'categories'];
  noLoading.some(slug => store.dispatch(setLoading(!path.includes(slug))));

  return axios[method](process.env.REACT_APP_API_HOST + path, request)
    .then(response => {
      store.dispatch(setLoading(false));
      console.log(response);

      method !== 'get'  && store.dispatch(openNotification({
        type: 'success',
        message: response.data.message
      }));

      return {
        ...response.data,
        status: 200
      };
    })
    .catch(error => {
      store.dispatch(setLoading(false));
      console.log(error.response);

      store.dispatch(openNotification({
        type: 'failed',
        message: error.response.data.message
      }));

      return {
        ...error.response,
        status: 422
      };
    })
};

export const read = (url, request) => {
  return axiosInstance('get', url, request)
};

export const remove = (url, request) => {
  return axiosInstance('delete', url, request)
};

export const create = (url, request) => {
  return axiosInstance('post', url, request)
};

export const update = (url, request) => {
  return axiosInstance('put', url, request)
};
