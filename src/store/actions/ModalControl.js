import {
  MODAL_SIGNUP,
  MODAL_SIGNIN,
  MODAL_OFFER
} from '../types';

export const openModalSignup = payload => ({ type: MODAL_SIGNUP, payload });
export const openModalSignin = payload => ({ type: MODAL_SIGNIN, payload });
export const openModalOffer = payload => ({ type: MODAL_OFFER, payload });
