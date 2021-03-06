import {
  COUNTRY_LIST,
  CATEGORY_LIST
} from '../types';

const initialState = {
  countryList: [],
  categoryList: [],
  subCategoryList: []
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case COUNTRY_LIST:
      return { ...state, countryList: action.payload };
    case CATEGORY_LIST:
      return { ...state, categoryList: action.payload };
    default:
      return state;
  }
}
