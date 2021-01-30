import { SET_CURRENT_USER, USER_PROFILE } from '../types';

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  userProfile: {}
};

export default function index(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };
    default:
      return state;
  }
}
