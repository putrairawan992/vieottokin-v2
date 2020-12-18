import {
  MODAL_SIGNUP,
  MODAL_SIGNIN,
  MODAL_OFFER
} from '../types';

const initialState = {
  showModalSignup: false,
  showModalSignin: false,
  showModalOffer: false,
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case MODAL_SIGNUP:
      return { ...state, showModalSignup: action.payload };
    case MODAL_SIGNIN:
      return { ...state, showModalSignin: action.payload };
    case MODAL_OFFER:
      return { ...state, showModalOffer: action.payload };
    default:
      return state;
  }
}
