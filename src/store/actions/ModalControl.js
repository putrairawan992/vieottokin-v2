import {
  MODAL_SIGNUP,
  MODAL_SIGNIN,
  MODAL_OFFER,
  MODAL_NEWPARTNER,
  MODAL_EDITPARTNER,
  MODAL_NEWSERVICE,
  MODAL_EDITSERVICE,
  MODAL_DELETECONFIRM
} from '../types';

export const openSignup = payload => ({ type: MODAL_SIGNUP, payload });
export const openSignin = payload => ({ type: MODAL_SIGNIN, payload });
export const openOffer = payload => ({ type: MODAL_OFFER, payload });
export const openNewPartner = payload => ({ type: MODAL_NEWPARTNER, payload });
export const openEditPartner = payload => ({ type: MODAL_EDITPARTNER, payload });
export const openNewService = payload => ({ type: MODAL_NEWSERVICE, payload });
export const openEditService = payload => ({ type: MODAL_EDITSERVICE, payload });
export const openDeleteConfirm = payload => ({ type: MODAL_DELETECONFIRM, payload });
