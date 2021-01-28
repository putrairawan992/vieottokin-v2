import {
  COUNTRY_LIST,
  CATEGORY_LIST,
  SUBCATEGORY_LIST
} from '../types';

export const setCountryList = payload => ({ type: COUNTRY_LIST, payload });
export const setCategoryList = payload => ({ type: CATEGORY_LIST, payload });
export const setSubCategoryList = payload => ({ type: SUBCATEGORY_LIST, payload });
