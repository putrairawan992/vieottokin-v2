import { LOADING_PROGRESS } from '../types';

export const setLoading = payload => ({
  type: LOADING_PROGRESS,
  payload
});
