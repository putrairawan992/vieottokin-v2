import { SERVICE_FILTER } from '../types';

const initialState = {
  search: '',
  page: 1,
  categoryId: '',
  country: '',
  city: '',
  limit: 10
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case SERVICE_FILTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
