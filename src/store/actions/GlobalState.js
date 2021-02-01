import {
  COUNTRY_LIST,
  CATEGORY_LIST
} from '../types';

export const setCountryList = payload => ({ type: COUNTRY_LIST, payload });
export const setCategoryList = payload => ({ type: CATEGORY_LIST, payload });
