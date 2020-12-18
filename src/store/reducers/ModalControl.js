import {
  MODAL_SIGNUP
} from '../types';

const initialState = {
  showModalSignup: false
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case MODAL_SIGNUP:
      return { ...state, showModalSignin: action.payload };
    default:
      return state;
  }
}
