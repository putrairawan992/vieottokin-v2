import {
  MODAL_SIGNUP,
  MODAL_SIGNIN
} from '../types';

export const openModalSignup = payload => ({ type: MODAL_SIGNUP, payload });
export const openModalSignin = payload => ({ type: MODAL_SIGNIN, payload });
