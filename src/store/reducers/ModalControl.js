import {
  MODAL_SIGNUP,
  MODAL_SIGNIN,
  MODAL_OFFER,
  MODAL_NEWPARTNER,
  MODAL_DELETECONFIRM
} from '../types';

const initialState = {
  showModalSignup: false,
  showModalSignin: false,
  showModalOffer: false,
  showModalNewPartner: false,
  showModalDeleteConfirm: false,
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case MODAL_SIGNUP:
      return { ...state, showModalSignup: action.payload };
    case MODAL_SIGNIN:
      return { ...state, showModalSignin: action.payload };
    case MODAL_OFFER:
      return { ...state, showModalOffer: action.payload };
    case MODAL_NEWPARTNER:
      return { ...state, showModalNewPartner: action.payload };
    case MODAL_DELETECONFIRM:
      return { ...state, showModalDeleteConfirm: action.payload };
    default:
      return state;
  }
}
