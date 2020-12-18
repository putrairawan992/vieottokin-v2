import {
  MODAL_SIGNUP,
  MODAL_SIGNIN
} from '../types';

const initialState = {
  showModalSignup: false,
  showModalSignin: false,
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case MODAL_SIGNUP:
      return { ...state, showModalSignup: action.payload };
    case MODAL_SIGNIN:
      return { ...state, showModalSignin: action.payload };
    default:
      return state;
  }
}
