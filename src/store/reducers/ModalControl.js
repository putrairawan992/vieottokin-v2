import {
  MODAL_SIGNIN
} from '../types';

const initialState = {
  showModalSignin: false
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case MODAL_SIGNIN:
      return { ...state, showModalSignin: action.payload };
    default:
      return state;
  }
}
