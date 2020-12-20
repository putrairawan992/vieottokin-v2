import {
  MODAL_SIGNUP,
  MODAL_SIGNIN,
  MODAL_OFFER,
  MODAL_NEWPARTNER
} from '../types';

export const openModalSignup = payload => ({ type: MODAL_SIGNUP, payload });
export const openModalSignin = payload => ({ type: MODAL_SIGNIN, payload });
export const openModalOffer = payload => ({ type: MODAL_OFFER, payload });
export const openModalNewPartner = payload => ({ type: MODAL_NEWPARTNER, payload });
